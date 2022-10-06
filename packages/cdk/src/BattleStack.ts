import * as cdk from 'aws-cdk-lib';
import * as iam from "aws-cdk-lib/aws-iam";
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

export class BattleStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        this.createFunction('api',{
            createPublicUrl:true
        })


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
                authType:lambda.FunctionUrlAuthType.NONE
            });
            url.grantInvokeUrl(new iam.AnyPrincipal());
            new cdk.CfnOutput(this, "funcUrl00" + name, { value: url.url });
        }

        new cdk.CfnOutput(this, "funcName00" + name, { value: func.functionName });
        return func;
    }
}


interface AdditionalFuncOptions
{
    /**
     * If true a public URL will be created for the function
     */
    createPublicUrl?:boolean;
}
