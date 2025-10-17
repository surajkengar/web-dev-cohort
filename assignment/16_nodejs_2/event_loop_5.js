const fs =require("node:fs");

setImmediate(()=>{
    console.log("setImmediate start");
})
setTimeout(()=>{
    console.log("setTimeout start");
})

Promise.resolve("promise resolved").then((msg) =>{
    console.log(msg);
})

fs.readFile("./file.txt" , "utf8" , ()=>{
    console.log("file reading start");
})

process.nextTick(()=>{
    process.nextTick(()=>{
        console.log("inside process nextTick ");
    })

    console.log("outside process nextTick ");
})

console.log("this is the end of the file");
