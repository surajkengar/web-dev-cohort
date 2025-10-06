// map method in javascript
// map method is used to iterate through array and run a function for each element in array.
// map method sent a actual element , index of that element and entire array respectively.
// function take that as a parameter.
// map method create a new array and the return value store in that new array.

// 1)
const str = ["suraj","sagar","santosh"];
const temp =function(name){
    return name;
}
const temp2 =str.map(temp);

console.log(temp2);

//2)
const name1=str.map(function(name){
    return name;
})
console.log(name1);

// 3)
const name2 = str.map((name) => {
    return name;
})

console.log(name2);


//4)
const name3 = str.map(function(name){
    return name;
})
console.log(name3);

//5)

const info = [
    {name:"suraj" , age : 23 , gender : "male"},
    {name:"sagar" , age : 24 , gender : "male"},
    {name:"santosh" , age:22 , gender : "male"} 
]

const temp1=info.map(function(name1){
    return name1.age;
})
console.log(temp1);

// 6)
const info1 =[
    {name : "aniket" , age :23 , gender : "male"},
    {name : "pranav" , age : 24 , gender : "male"},
    {name : "swapnil" , age : 23 , gender : "male"}
]

const temp3 = info1.map((name1) => {
    return name1.name;
})

console.log(temp3);


// 7)
const  car =[
    {name:"swift", color:"white",seater:5},
    {name:"ertiga",color:"black",seater:7},
    {name : "innove" , color : "blue",seater:9}
]

const feat = car.map(function(feature){
    return feature.name;
})

console.log(feat);