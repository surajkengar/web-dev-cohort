// difference between dot and bracket notation in object
const key ="email";
const person={
    name:"suraj",
    "my hobbies":["treking","swimming"],
    age:23
}

console.log(person["my hobbies"]);
person[key]="surajkengar@gmail.com";
console.log(person);