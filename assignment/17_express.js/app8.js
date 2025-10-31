const express = require("express");

const {connectDB} =require("./config/database");
const {User} =require("./models/user");
const app = express();

app.use(express.json());

app.post("/signup" ,async (req, res) => {
    const user =new User(req.body);

    try{
        await user.save();
        res.send("user added successfully");
    }
    catch(err){
        res.send("something went wrong");
    }
})



connectDB()
    .then(()=>{
        console.log("database connection establish successfully");
        app.listen(3000 , ()=>{
            console.log("serever started successfully");
        })
    })
    .catch((err)=>{
        console.log("database connection not establish successfully");
    })



    









