// const str =true;
// // const str1=str.slice(0,3);
// // console.log(str1);
// console.log(typeof(typeof(str)));
// console.log("=====================================")
// let x = 16+4+"suraj";
// console.log(x);

// let y = "suraj"+16+4;
// console.log(y);
// y = undefined;
// console.log(y)

// let x1;
// console.log(typeof(x1))


// let num = 35;

// let str = num + " ";
// console.log(typeof(str));
 
// let num1 = +str;
// console.log(typeof(num1))

// let str1 = "17";
// let str2 = "10";

// let str3 = str1 + str2;  //"1710"

// let str4 = +str1 + +str2; // 27

// console.log(str3 , str4);
// console.log(typeof(str3));

// let str1 ="name";
// let age =23;

// console.log(`my name is ${str1} and age is ${age}`);

// let num=null;
// console.log(typeof(num));


// let num1 = 233n;
// console.log(typeof(num1));

// let num3 = num1 + 0;

// console.log(num3);
// let age1 =18;
// let str = age1 >= 18 ? "eligible for election"  : "not eligible for election";
// console.log(str);


// let arr = [1,3,3,5,6];


// let num=arr.push(8); // [1,3,3,5,6,8]
// console.log(num);

// let num1=arr.pop(); //[1,3,3,5,6]
// console.log(num1);

// let num3=arr.unshift(10); //[10,1,3,3,5,6]
// console.log(num3);


 

// let num4 =arr.shift();// [1,3,3,5,6]
// console.log(num4);

// let arr1 =new Array(1,2,4);
// // arr1.push(1);
// // arr1.push(2);
// console.log(arr1);
// console.log(arr1.length);

// let arr1=[1,2,3,4,5];

// function myfun(arr1){
//     let arr2 = arr1;
//     arr2.push(300);
//     arr1.pop();
//     arr2.unshift(500);
//     console.log(arr2); //[500,1,2,3,4,5,300];
//     console.log(arr1);//[1,2,3,4,5]
// }
// myfun(arr1);
// console.log(arr1);//[1,2,3,4,5]
// let arr2 =arr1.slice(0);
// console.log(arr2);
// arr2.push(100);
// arr1.shift();
// arr2.pop();
// arr2.unshift(200);

// console.log(arr1);[2,3,4,5]

// console.log(arr2);[200,1,2,3,4,5]

// let arr3 =[].concat(arr1);
// arr3.push(1000);

// console.log(arr3);
// console.log(arr1);

// let obj = {
//     "a":4,
//     "b":5
// }

// function changename(obj){
//     obj.a = 56;

//     console.log(obj);
// }
// changename(obj);
// console.log(obj);


// let arr12 =[2,3,4,5];

// let arr34=[...arr12];
// console.log(arr34);

// let num= [];
// num = 34;
// console.log

// const num1=[1,2,3,4,5]
// num1[2]=6;

// console.log(num1);
// num1=[8,9,10,11];
// console.log(num1);

// let arr =[1,2,3,4];

// arr.forEach(function(num){
//     console.log(num+1);
// })

// let arr =[1,2,3,4,5];

// let[a , b , ...c]=arr;
// let d  = [...arr]
// console.log(d);
// console.log(a);
// console.log(b);
// console.log(c);

// let obj1={
//     name:"suraj",
//     age:23
// }

// console.log(obj1.name);
// console.log(obj1["name"]);

// let arr11 =[
//     {name:"suraj" , age:30},
//     {name:"sagar",age:30}
// ]


// if(arr11[0].age > arr11[1].age ){
//     console.log(`younger=${arr11[1].name}  and elder=${arr11[0].name} ` )
// }
// else if(arr11[1].age === arr11[0].age){
//         console.log(`${arr11[0].name} and ${arr11[1].name} is a twin`);
// }
// else{
//     console.log(`younger=${arr11[0].name} and elder=${arr11[1].name}`);
// }
// let gender="female";
// let key="gender_value";
// arr11[0][key]=gender;
// console.log(arr11);

// console.log(arr11[0].age);

// const obj1 =[
//     {name:"suraj",age:23,gender:"male"},
//     {name:"sagar",age:24,gender:"male"},
//     {name:"santosh",age:24,gender:"male"}
// ]

// for(let num in obj1){
//     console.log(`name is ${obj1[num].name} and age is ${obj1[num].age}`);
// }


// for(let num of obj1){
//     console.log(`name is ${obj1[]}`)
// }

// const obj2 ={
//     name:"suraj",
//     age:23,
//     gender:"male",

// }

// for(let num in obj2){
//     console.log(obj2[num]);
// }

// for(let num1 of Object.keys(obj2)){
//     console.log(obj2[num1]);
// }

// const name1 ="suraj";
// const name2 ="sagar";

// const age1 =23;
// const age2 =34;

// const obj1={
//     [name1]:age1,
//     [name2]:age2,
   
// }

// console.log(obj1);

// const obj1 ={
//     name1 :"suraj",
//     age :23
// }

// const obj2 ={
//     name:"sagar",
//     gender:"male"
// }

// const temp={..."abcdefg"};
//  console.log(temp);

// const{name:a , gender:b}=obj2;
// console.log(a,b);

// const obj4 =[
//     {name:"suraj",age:23},
//     {name:"sagar",age:24}

// ]

// const[first ,second]=obj4;

// console.log(first);

// for(let {name , age} of obj4 ){
//     console.log(name , age);
// }
// var a=10;
// let b=20;
// function myfun(num1 , num2){
//     let b=60;
//     var a=50;
// }

// myfun(a,b);

// console.log( a,b);
// console.log(a);
// var a =5;

// sayHellow()

// function sayHellow(){
//     console.log("Hi suraj Bhaiya");
// }

// console.log(myname);

// var myname = function(){
//     console.log("my name is Suraj");
// }

// myname()

// console.log(x);
// var x = 5;

// console.log(sayHi);
// sayHi();
// function sayHi(){
//     console.log("Hiiii")
// }   // function declaration is hoist and it will give you a correct answer.

// console.log(temp);  // it will hoist but through ans undefinied.
// var temp = 5;

// console.log(temp1);  // it will hoist but through ans reference error
// let temp1=45;

// console.log(temp2); //it will also hoist but through reference error beacuse it store in temperol dead zone before reach that initialization code line
// const temp2 =67;


// console.log(temp3); // var will be hoist and through undefined
// temp3()    // it will not hoist and through  type error
// const temp3=function(){
//     console.log("say hello world");
// }


// console.log(temp3); // var will be hoist and through undefined
// temp3()    // it will not hoist and through type error
// const temp4 = ()=>{
//     console.log("hello world")
// }




///  scopes 

// var a = 20;
// let b = 30;
// function temp(){
//     var a = 40;
//     let b = 50;
//     console.log(a,b);
// }

// temp();
// console.log(a,b);

// {
//     var a = 100;
//     let b = 200;
//     console.log(a,b);

// }
// console.log(a,b);

// function test() {
//    if (true) {
//       var x = 10;
//    }
//    console.log(x); // ✅ 10 (accessible outside the block)
// }
// test();

// function test() {
//    if (true) {
//       let y = 20;
//       const z = 30;
//       console.log(y); // ✅ 20
//       console.log(z); // ✅ 30
//    }
//    console.log(y); // ❌ ReferenceError
//    console.log(z); // ❌ ReferenceError
// }
// test();


// function sum(a=1,b=2,c){
//     console.log(a,b,c);
//  return a+b+c;
// }

// default operetor
// console.log(sum(10,20,30));
// console.log(sum(10,20));
// console.log(sum());

//Rest operator
// function sum1(a,...b){
//     console.log(a,b);
// }
// sum1(1,2,3,4,5,6,7,8,9,10);

// function sum1(){
//     console.log(arguments);
// }
// sum1(1,2,3,4,5,6,7,8,9,10);

function myfun1(){
    console.log("hello world");
}

function myfun2(){
    console.log("say hii")
}

myfun2(myfun1());



