import * as cdk from 'aws-cdk-lib';
import * as iam from "aws-cdk-lib/aws-iam";
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as s3 from "aws-cdk-lib/aws-s3";
import * as s3Deployment from 'aws-cdk-lib/aws-s3-deployment';
import { Construct } from 'constructs';

export class BattleStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        let branch:string = this.node.tryGetContext('git_branch');

        if(!branch){
            throw new Error('git_branch context variable required')
        }
        branch=branch.replace(/\W/g,'_');

        this.createFunction('api',{
            createPublicUrl:true
        })

        this.createWebSite('battle-app',branch);
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

    createWebSite(name: string, branch:string){

        const bucket=new s3.Bucket(this,'website-'+name+'-'+branch,{
            publicReadAccess:true,
            removalPolicy:cdk.RemovalPolicy.RETAIN,
            websiteIndexDocument:"index.html",
            websiteErrorDocument:"index.html",
        });

        new s3Deployment.BucketDeployment(this,`website-${name}-deployment-${branch}`,{
            destinationBucket:bucket,
            sources:[
                s3Deployment.Source.asset(`../../dist/packages/${name}/exported`)
            ]
        });

        new cdk.CfnOutput(this,`websiteUrl00${name}`,{value:`https://${bucket.bucketDomainName}/index.html`});

    }
}


interface AdditionalFuncOptions
{
    /**
     * If true a public URL will be created for the function
     */
    createPublicUrl?:boolean;
}
