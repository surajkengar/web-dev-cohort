//iterate through object keys

const person ={
    name : "suraj",
    age :23,
    hobbies :  ["treking","swimming"]
}

console.log(Object.keys(person));

for(let key of Object.keys(person)){
    console.log(person[key]);
}