//block scope and function scope

// block scope means we cannot access a element outside the block.
//let and const is block scope

if(true){
    let temp1=22;
    const temp2=34;
}

// we cannot access a temp1 and temp2 beacuse let and const is block scope keyword


// var is function scope keyword

//we can acees var element outside the block.

if(true){
    var temp=45;
}

console.log(temp);
//this is possible beacuse of function scope