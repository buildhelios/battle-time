export const createResponse=(statusCode:number,body:any)=>({
    statusCode,
    headers: {
        "Content-Type": "application/json",
        Server: "BattleTime",
    },
    body: JSON.stringify(body),
})
