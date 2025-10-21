const http =require("node:http");

const server = http.createServer(function(req , res){
    res.end("hii guys,  i am suraj ");
})

server.listen(7777);