const express = require('express');

const app = express();

app.use("/route" , (req,res,next) => {
    console.log("first response");
    next();
});
 app.use("/route" , (req,res,next) => {
    console.log("second response");
    next();
 },
(req, res, next) => {
    console.log("third response");
    next();
},
(req,res,next) => {
    console.log("fourth respose");
    res.send("response successfully send");
}
);



app.listen(3000 , ()=>{
    console.log("server start successfully");
});