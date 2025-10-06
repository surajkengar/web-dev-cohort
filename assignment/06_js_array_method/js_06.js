//sort method 
// sort method used to sort the array asending or decending order.
//it mutates or change in original array.



//1)
const arr =[2,3,5,3,4,2,2,1,];

arr.sort(function(a , b){
    return a-b;
})

console.log(arr)

//2)
const arr1 =[3,2,3,2,5,5,7,33,7755,11,2,3,4,4,3];

arr1.sort((a,b) => {
    return a-b;
})
console.log(arr1);

// 3)

const arr2 =[
    {name:"suraj", age:23 , gender:"male"},
    {name:"sagar",age:12,gender:"male"},
    {name:"santosh",age:67,gender:"male"}
]

arr2.sort((a,b) => {
    return a.age - b.age;
})

console.log(arr2);


//4)
const temp1 =[2,8,5,3,6,5,1];

temp1.sort((a,b) => {
    return a-b;
})

console.log(temp1);