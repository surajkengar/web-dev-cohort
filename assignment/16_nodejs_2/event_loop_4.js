const fs =require("node:fs");

setTimeout(()=>{
    console.log("first_timeout");
})

setImmediate(()=>{
    console.log("first_immediate");
})

Promise.resolve("promise resolved").then((msg) => {
    console.log(msg);
})

fs.readFile("./file.txt" , "utf8" , () => {
    setTimeout(()=>{
        console.log("second_timeout start");
    })

    process.nextTick(()=>{console.log("second_nextstick start")});

    setImmediate(()=>{
        console.log("second_setimmediate start");
    })

    console.log("file start reading cb")
})

process.nextTick(()=>{
    console.log("first_process nexttick start ");
})

console.log("this is thee last line of the code");