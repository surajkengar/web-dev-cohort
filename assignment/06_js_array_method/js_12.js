//splice method 
// splice method is used to add , delete or replace element in array.
// it changes the original array
// it return the new which containg removed element.

// splice method for delete element
const num =[1,2,3,4,5,6,7,8];

const deleted=num.splice(1,4);
console.log(deleted);

//splice method for insert element

const num1=[2,3,4,5,6,7];
const deleted1=num1.splice(1,0,7);
console.log(deleted1);