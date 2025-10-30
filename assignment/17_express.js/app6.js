const express = require('express');

const app = express();

const {adminAuth,userAuth} = require("./middlewares/auth");
app.use("/admin",adminAuth);
app.use("/user" , userAuth);
app.get("/admin/getalldata" , (req , res , next) => {
    res.send("send all data");
})

app.get("/admin/deletealldata" , (req , res , nexr) => {
    res.send("delete all data");
})

app.use("/user/getalldata",(req,res,next) => {
    res.send("get all data");
})

app.use("/user/deletealldata" , (req , res , next) => {
    res.send("dalate all data");
})

app.listen(3000 , ()=>{
    console.log("server start successfully");
});