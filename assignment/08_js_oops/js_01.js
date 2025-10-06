//method 
// function inside object
// this is special keyword in javascript.
//this refers to object that is currentely executing the function.

const obj1 ={
    name:"suraj",
    age:23,
    about : function(){
        console.log(`name is ${this.name} and age is ${this.age}`);
    }
}

obj1.about();
