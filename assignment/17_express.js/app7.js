const express = require('express');

const app = express();

app.get("/user",(req,res,next) => {

    throw new Error("user data not found");

    res.send("user route");
})

app.use((err,req,res,next) => {
    if(err){
        res.status(500).send("something went wrong");
    }
})

app.listen(3000 , ()=>{
    console.log("server start successfully");
});