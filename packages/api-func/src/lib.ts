export const createResponse=(statusCode:number,body:any)=>({
    statusCode,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":"Accept,Content-Type,X-Amz-Date,Authorization,X-Api-Key",
        "Access-Control-Allow-Methods":"OPTIONS,GET,PUT,POST,DELETE,PATCH,HEAD",
        "Access-Control-Max-Age":86400,
        "Access-Control-Allow-Credentials":true,
        Server: "BattleTime",
    },
    body: JSON.stringify(body),
})
