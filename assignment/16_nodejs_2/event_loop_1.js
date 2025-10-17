
const fs= require("node:fs");
const a=100;



setImmediate(() => {
    console.log("right now you are in setImmediate");
})

fs.readFile("./file.txt" , "utf8" ,() => {
      console.log("now controler start reading file");      
})

setTimeout(() =>{
    console.log("time expired");
},1000);

// setInterval(()=>{
//     console.log("set interval");
// },5000)

function printA(a){
    console.log("value of a is"+a);
}

printA(a);

console.log("this is the last line of the code");