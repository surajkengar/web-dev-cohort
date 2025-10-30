const express = require('express');

const app = express();

app.use("/route",(req,res,next) => {
 console.log("first response");
 next();
 res.send("first response");
},
(req,res,next) => {
    console.log("second response");
    res.send("second response");
    next();
},
(req,res,next) => {
    console.log("third response");
    next();
},
(req,res,next) => {
    console.log("fourth response");
    next();
},
(req,res,next) => {
    console.log("seventh response");
    next();

}
)



app.listen(3000 , ()=>{
    console.log("server start successfully");
});