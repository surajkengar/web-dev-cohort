//use const for arrays

const a=[1,2,3,4,5];
a.push(12);
console.log(a);

//it is possible beacuse we cannot change the actual address which is stored in actual memory.we just change the value which is stored in heap memory.
const b=5;
b=6;
console.log(b);
//above thing is not possible beacuse this is primitive datatypes.it store actual value in stack.

