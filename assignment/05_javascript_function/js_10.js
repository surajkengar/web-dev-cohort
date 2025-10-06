// parameter destructing

const temp ={
    name:"suraj",
    age:23
}


function myfun({name , age}){
    console.log(name);
    console.log(age);
}

myfun(temp);