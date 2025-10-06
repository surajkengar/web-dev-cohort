//prototype chaining


const obj1 = {
    key1 : "value1",
    key2 : "value2"
}

const obj2 = Object.create(obj1);
obj2.key3 ="value3";

console.log(obj2.key2);

// object.create(obj1) it create a empty array of obj2 but it set a obj1 as it prototype.
// that means when control try to access any property in obj2 first it check in obj2 but if property is not find in obj2 then it will look in obj1 and print it.