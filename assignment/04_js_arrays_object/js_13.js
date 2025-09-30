//iterate through object

const person ={
    name:"suraj",
    age:23,
    hobbies:["treking","swimming","playing cricket"]
}

for(let key in person){
    console.log(person[key]);
}

//print key value player

for(let key in person){
    console.log(`${key} : ${person[key]}`)
}

