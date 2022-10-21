import * as cdk from 'aws-cdk-lib';
import * as cm from "aws-cdk-lib/aws-certificatemanager";
import * as cf from "aws-cdk-lib/aws-cloudfront";
import * as cfo from "aws-cdk-lib/aws-cloudfront-origins";
import * as iam from "aws-cdk-lib/aws-iam";
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as s3 from "aws-cdk-lib/aws-s3";
import * as s3Deployment from 'aws-cdk-lib/aws-s3-deployment';
import { Construct } from 'constructs';

export class BattleStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        this.createFunction('api',{
            createPublicUrl:true
        })

        this.createWebSite('battle-app',null);
    }

    createFunction(name: string, {
        createPublicUrl,
        ...props
    }:Partial<lambda.FunctionProps> & AdditionalFuncOptions={}): lambda.Function {
        const id = name + "-func";
        const func = new lambda.Function(this, id, {
            runtime: lambda.Runtime.NODEJS_14_X,
            architecture: lambda.Architecture.ARM_64,
            code: lambda.Code.fromAsset(`../../dist/packages/${id}`),
            handler: `main.handler`,
            ...props,
        });

        if(createPublicUrl){
            const url = func.addFunctionUrl({
                authType:lambda.FunctionUrlAuthType.NONE,
                cors:{
                    allowCredentials:true,
                    allowedHeaders:['*'],
                    allowedMethods:[lambda.HttpMethod.ALL],
                    allowedOrigins:['*'],
                    maxAge:cdk.Duration.days(1),
                }
            });
            url.grantInvokeUrl(new iam.AnyPrincipal());
            new cdk.CfnOutput(this, "funcUrl00" + name, { value: url.url });
        }

        new cdk.CfnOutput(this, "funcName00" + name, { value: func.functionName });
        return func;
    }

    createWebSite(name: string, domainName:string|null){

        let certificate:cm.Certificate|undefined=undefined;

        if(domainName){
            certificate = new cm.Certificate(this, "CustomDomainCertificate", {
                domainName: domainName,
                validation: cm.CertificateValidation.fromDns()
            });
            new cdk.CfnOutput(this,`websiteDomain00${name}`,{value:domainName});
        }

        const bucket=new s3.Bucket(this,'website-'+name,{
            accessControl:s3.BucketAccessControl.PRIVATE,
            autoDeleteObjects:true,
            removalPolicy:cdk.RemovalPolicy.DESTROY
        });

        const distribution = new cf.Distribution(this, 'Distribution', {
            defaultBehavior: { origin: new cfo.S3Origin(bucket) },
        });

        new s3Deployment.BucketDeployment(this,`website-${name}-deployment`,{
            destinationBucket:bucket,
            distributionPaths:['/*'],
            distribution,
            sources:[
                s3Deployment.Source.asset(`../../dist/packages/${name}/exported`)
            ]
        });

        const originAccessIdentity=new cf.OriginAccessIdentity(this, `website-${name}-origin-ident`);
        bucket.grantRead(originAccessIdentity);

        const dist=new cf.Distribution(this, `website-${name}-distribution`, {
            defaultRootObject: 'index.html',
            defaultBehavior: {
                origin:new cfo.S3Origin(bucket,{originAccessIdentity}),
                viewerProtocolPolicy: cf.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
            },
            certificate,
            domainNames:domainName?[domainName]:undefined
        });

        new cdk.CfnOutput(this,`websiteUrl00${name}`,{value:`https://${dist.domainName}`});

    }
}


interface AdditionalFuncOptions
{
    /**
     * If true a public URL will be created for the function
     */
    createPublicUrl?:boolean;
}
