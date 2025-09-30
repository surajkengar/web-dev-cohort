//intro of arrays

//arrays is ordered collection of items
//
let fruits =["mango","banana","apple","grapes"];
let num = [1,2,3,4,5,6];
let mix = [ null , undefined , "sangola" ,23 ];
let obj = {};

console.log(mix[2]);

// array is a reference type
// typeof of a array is object

console.log(typeof num);

// we can check that wheter is it array or not
console.log(Array.isArray(num));
console.log(Array.isArray(obj));