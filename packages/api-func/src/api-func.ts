import { Answer, isAnswer } from "@battle-time/common";
import { APIGatewayEventRequestContextV2, APIGatewayProxyEventV2WithRequestContext } from "aws-lambda";
import { createResponse } from "./lib";
import { apiQuestions } from "./questions";

export async function handler(evt:APIGatewayProxyEventV2WithRequestContext<APIGatewayEventRequestContextV2>){

    const body=evt.body?JSON.parse(evt.body):undefined;
    const path=`${evt.requestContext.http.method}:${evt.requestContext.http.path}`;

    switch(path){

        case 'GET:/questions':
            return createResponse(200,apiQuestions);

        case 'POST:/questions':{
            const answers:Answer[]=body;
            if(!Array.isArray(answers) || !answers.every(isAnswer)){
                return createResponse(400,'Array of Answers expected');
            }
            return createResponse(200,`${answers.length}(s) Answers submitted`);
        }

        case 'GET:/evt':
        case 'POST:/evt':
            return createResponse(200,evt);

        default:
            return createResponse(404,null)
    }
}
