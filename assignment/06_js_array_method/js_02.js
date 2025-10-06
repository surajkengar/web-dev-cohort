//forEach methodi
//forEach function is used to interate through array and run function for each element in array.
//in forEach function parameter is element ,index , array
//forEach function not return any new array like map.

const arr = [3,4,5,6,7,7];

arr.forEach((element , index) => {
    console.log(`index is ${index} and number is ${element}`);
})


const name1 =[
    {name:"suraj" , age:23 , gender:"male"},
    {name:"sagar" , age:22 ,gender: "male"},
    {name:"santosh",age:22,gender : "male"}
]

name1.forEach((num ,index) => {
    console.log(num.age);
})