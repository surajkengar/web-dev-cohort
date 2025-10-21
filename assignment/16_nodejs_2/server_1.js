const http = require("node:http");

const server = http.createServer((req , res)=>{
    if(req.url === "/getSecretdata"){
        res.end("there is no secret data");
    }
    res.end("hii , guys i am suraj");
})

server.listen(3000);