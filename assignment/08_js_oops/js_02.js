// this keyword
function temp1(){
    console.log(`name is ${this.name} and age is ${this.age}`);
}

const obj1 = {
    name : "suraj",
    age : 23,
    about:temp1
}

const obj2 ={
    name :"sagar",
    age: 24,
    about:temp1

}

const obj3 ={
    name:"santosh",
    age :26,
    about:temp1
}

obj1.about();
obj2.about();
obj3.about();


// var name = "temp";
// var age = 45;

// const obj1 = {
//     name : "suraj",
//     age : 23,
//     about:()=>{
//             console.log(`name is ${this.name} and age is ${this.age}`);

//         }
        
    
// }

// obj1.about()