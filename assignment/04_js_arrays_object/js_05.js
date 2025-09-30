//how to cancate two arrays

let a=[1,2,3,4,5];
// 1)
let b=a.slice().concat([6,7,8,9]);

console.log(a);
console.log(b);

// 2) 
 let c=  [].concat(a,[6,7,8,9]);
 console.log(c);

 //3)
 let d= [...a,5,6,7,8];
 console.log(d);