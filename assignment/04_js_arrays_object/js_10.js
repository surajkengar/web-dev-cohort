//array destructurering

const fruit =["banana","mango","orange","grapes"];

let[f1,,f3,...newarry] = fruit;

let f7 = fruit[1];
console.log("f7 value is"+f7);

console.log(f1);
console.log(f3);
console.log( f1)
console.log()
console.log(newarry);

let [...newarr]=fruit;
console.log(newarr);

let fruit1=fruit[0];
let [f5,f2,...newarray]=fruit;
console.log(fruit1);
console.log(f2);
console.log(newarray)