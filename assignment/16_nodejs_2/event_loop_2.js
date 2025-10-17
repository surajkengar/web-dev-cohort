const fs =require("node:fs");

const a=100;

setImmediate( () => {
    console.log("setImmediate");
})

setTimeout(()=>{
    console.log("setTimeout");
})

fs.readFile("./file.txt" ,"utf8" ,()=>{
    console.log("kernal start file reading");
})

process.nextTick(()=>{
    console.log("process.nextTick");
})

function printA(a){
    console.log("value of a"+a);
}

printA(a);

Promise.resolve("promise").then(console.log);

console.log("last line of the programe");



