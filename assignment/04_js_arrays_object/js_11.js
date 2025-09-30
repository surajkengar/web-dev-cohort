// object in array
const person ={
    name:"suraj",
    age :23,
    hobbies:["cycling","treking","playing cricket"]
}


console.log(person.hobbies[1]);

person.gender="male";
console.log(person);

//we can access and add element by using bracket notation

console.log(person["name"]);
console.log(person["age"]);

// add key value pair

person["caste"]="hindu";

console.log(person.caste);