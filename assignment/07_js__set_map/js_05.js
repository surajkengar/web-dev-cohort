//4) cloning using object.assign

const temp1 =[1,2,3,4,6,7];


// 1) first method by using spread method
const temp2 =[...temp1];

temp1.push(522);

console.log(temp1);
console.log(temp2);

//2) second method by using object.assign method

const obj = [
    {name : "suraj"},
    {age : 23}
]

const obj2 = Object.assign({},obj);
obj.key3 = "male";

console.log(obj2);
console.log(obj);
