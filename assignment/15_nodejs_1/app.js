
// require("./xyz");

// this is one way to accessing function by using "dot" operator.
// const obj=require("./sum");




// this is another way by using destucturing.
const{ multi,x }=require("./sum.js");

const{info1,info2 }=require("./information/index.js");

info1("suraj");
info1("sagar");
multi(9,4);

console.log(x);
console.log("hii guys i am suraj kengar");

// import{name} from "./xyz";

// name("hello world");

// import{sum , multi , x} from "./sum.js";

// sum(5,4);
// multi(6,2);
// console.log(x);

