//maps is special object that store key value pairs
//key can be anytype like string , number  but normal oblect key type only string and symbol.


// 1)creating a map() object

const arr = new Map();

// 2) .set method to inserting item in map object

arr.set('first_name' , 'suraj');
arr.set('age' , 23);
arr.set(1 , 'one');
arr.set(true , 'yes');

console.log(arr.keys());

// in above example key type is anything.

// 3)get method to access item in array

console.log(arr.get('first_name'));
console.log(arr.get('age'));
console.log(arr.get(true));

// 4) .has method is used to checking existance of that item

console.log(arr.has('age'));

// 5) .delete method is used to delete the element 

console.log(arr.delete('age'));
console.log(arr);

// 6) .size method for check the length of the object.

console.log(arr.size);
