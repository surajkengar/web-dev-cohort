const fs=require("node:fs");

setTimeout(()=>{
    console.log("first_setTomeout start");
})

setImmediate(()=>{
    console.log("first_setImmediate start");
})
fs.readFile("./file.txt","utf8" , ()=>{
    setTimeout(()=>{
        console.log("second_settimeout start");
    })
    setImmediate(()=>{
        console.log("second_setImmediate is start");
    })

    process.nextTick(()=>{
        console.log("second_nextTick start");
    })
})

process.nextTick(()=>{
    console.log("process nextTick");
})

console.log("this is last line of the whole code");