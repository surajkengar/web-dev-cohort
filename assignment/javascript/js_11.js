//undefined 

let name;

console.log(typeof name);
// whenever we just declare the variable but dont initialize them then the datatype of the variable is undefined 

//we can declare variable by using let and var keyword only. we cannot only declare a variable by using const keyword .when we declare a variable by using const keyword at same time we need to be initialize that variable.

var name1;
console.log(typeof name1);
// we can declare a variable by using var keyword

const name2 = "suraj";

// we cannot only declare a variable, we need to initialize that variable at same time.


// null 

let myname = null;
console.log(typeof myname);// typeof of a null is not a null it is object this is bug in javascript .

// null is datatype. null means we declare the varible and assign the value null .it is like the empty box is present but nothing in that.

//BigInt
let num1 = BigInt(12);
let num2 = 13n;
let num3 = 234n;
console.log(typeof num1);

//boolens  and  comparisions operator

// boolean give us a two value true or false.

let no = 6;
let no1 =3;

let temp = no > no1;
console.log(temp);


// == this comparisions operator only check the value if value is same then it give you true answer
//===  this comparisions operator check value as well as datatypes if value is same but datatypes then it give us false answer.



