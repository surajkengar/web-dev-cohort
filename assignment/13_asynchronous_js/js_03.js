console.log("script start...");
const id=setInterval(()=>{
    console.log("inside a loop");
},1000);

console.log("script end...");
clearInterval(id);