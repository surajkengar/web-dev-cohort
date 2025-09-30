//primitive datatypes
// value is store in actual memory.
//  whenever we copy that element it create a new copy in memory.
let a=5;
let b=a;

console.log(b);
a=7;
console.log(a);
console.log(b);

// reference or non-primitive datatypes.
//value is not store in actual memory it store in heap memory and address of the value in heap memory store in actual memory.
//when we copy that item it not create new copy it just give adress of that value to that new variable in actual memory.
let fruits = ["banana","mango","grapes"];
let fru = fruits;
console.log(fruits);
console.log(fru);
fruits.push("myfruit");
console.log(fruits);
console.log(fru);

