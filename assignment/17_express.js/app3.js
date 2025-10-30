const express = require('express');

const app = express();

app.use("/route" , (req , res , next) => {
    console.log("first response");
    // res.send("first response");
    next();

})
app.use("/route" , (req , res,next) => {
    console.log("second response");
    res.send("second response");
    next();
})



app.listen(3000 , ()=>{
    console.log("server start successfully");
});