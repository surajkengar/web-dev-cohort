//thread pool

const fs =require("node:fs");

fs.readFile("./file.txt","utf8",()=>{
    setTimeout(()=>{
        console.log("1 file read");
    },5000)

})
fs.readFile("./file.txt","utf8",()=>{
    setTimeout(()=>{
        console.log("2 file read")
    },5000)
    
    
})
fs.readFile("./file.txt","utf8",()=>{

    setTimeout(()=>{
        console.log("3 file read");
    },5000)
    
    
})
fs.readFile("./file.txt","utf8",()=>{

    setTimeout(()=>{
        console.log("4 file read");
    },5000)
    
    
})

fs.readFile("./file.txt","utf8",()=>{

    setTimeout(()=>{
        console.log("5 file read");
    },5000)
    
    
})

fs.readFile("./file.txt","utf8",()=>{
    setTimeout(()=>{
        console.log("6 file read")
    },5000)
    
    
})
fs.readFile("./file.txt","utf8",()=>{

    setTimeout(()=>{
        console.log("7 file read");
    },5000)
    
    
})
fs.readFile("./file.txt","utf8",()=>{

    setTimeout(()=>{
        console.log("8 file read");
    },5000)
    
    
})

// fs.readFile("./file.txt","utf8",()=>{
//     console.log("4 file read ");
    
// })
// fs.readFile("./file.txt","utf8",()=>{
//     console.log("5 file read ");
    
// })