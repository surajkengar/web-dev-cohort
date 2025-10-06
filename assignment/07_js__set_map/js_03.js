// set is special object in javascript that stores unique element
// it cannot contain duplicate element.
//it also have its own method
//order is not guranted
//no index based access
// to find the length set have .size property insted of .length.

//1) creating a new set
const num = new Set([1,2,3,2,3,4,4,4,5,6]);

console.log(num);
console.log(num[0]);

// 2) method for add new element
const num1 =new Set();
const item =[1,2,3,4];
const item1 =[1,2,3,4];
num1.add(1);
num1.add(2);
num1.add(3);
num1.add(3);
num1.add(item);
num1.add(item1);

console.log(num1);

//3)method for checking whether element is present or not

const temp = new Set(num);
if(temp.has(111)){
    console.log("1 is present");
}
else{
    console.log("1 is not present");
}

//4) find unique element in array

 const arr1 = [1,2,2,2,4,4,6,6,8,9];
 const unique = new Set(arr1);

 console.log(unique);

 console.log(unique.length);
 //we cannot use .length property on set
 //we can use .size property
 console.log(unique.size);

 // 5) find length by using another variable.

 let length =0;
 for(let num of unique){
    length++;
 }
 console.log(length);



