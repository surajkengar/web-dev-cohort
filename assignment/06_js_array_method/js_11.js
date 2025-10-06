// fill method
// fill method is used to replace element in array with given element.
//it changes the given array.
//you can chane the whole array or just part of it.


// 1) suppose i want to make of length 10 and fill 4 in whole array

const myarray = new Array(10).fill(4);

console.log(myarray);

// 2) suppose i want to fill some part of array with specific value.

const arr=[1,2,3,4,5,6,7];
 arr.fill(0,2,5);
 console.log(arr);