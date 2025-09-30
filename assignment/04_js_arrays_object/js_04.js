// how to clone array

let a=[ 1,2,3,4,5];

// 1)  slice method

let b=a.slice(0);
console.log(a===b);
console.log(a);
console.log(b);

// 2) concate method
  
let c=[].concat(a);
console.log(c);

//3) spread method

let d=[...a];
console.log(d);