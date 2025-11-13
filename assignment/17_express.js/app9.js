 const express = require("express");

const {connectDB} =require("./config/database");
const {User} =require("./models/user");
const app = express();

app.use(express.json());

app.get("/user" , async (req , res) => {
    const useremail = req.body.emailId;
    try{
            const users=await User.find({emailId:useremail});
            if(useremail.length === 0 ){
            res.send("user not found");
            }
            res.send(users);
        }
    catch(err){
        res.send("something went wrong");
    }



})

app.get("/feed" , async(req , res) => {
    const users = req.body.firstName;

    try{
        const userName =await User.findOne({firstName : users});
        if(users.length ===0){
            res.send("user not found");
        }
        res.send(userName);
    }catch(err){
        res.status(400).send("something went wrong");
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



    









