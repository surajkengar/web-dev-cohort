// filter method
//filter method also go through each element in a array check the condition if the condition is true then store the element inside the new array.
// it also return the new array but store the only element which is pass the condition

// find even number in array
const temp =[ 2,3,4,5,6,7,8];

const temp1 =  temp.filter(function(num){
     return (num % 2 === 0);
})
 console.log(temp1);


 // find the odd number in given array

 const temp2 = temp.filter(function(num){
    return (num % 2 !== 0);
 })

 console.log(temp2);


 // find the number in array which is divisible by 2;

 const arr =[33,4,5,566,897,44,53,22,78,86];

 const two =arr.filter(function(num){
    return (num % 2 ==0);
 })

 console.log(two);

 // find the name which start with letter s.

 const name =["suraj","aniket","sagar","pranav","swapnil","yuga","santosh"];

 const name1 = name.filter(function(name2){
    return (name2[0] == "s");
 })

 console.log(name1);

 //find the name which start without letter s

 const temp4 = name.filter(function(name1){
    return (name1[0] != "s");
 })

 console.log(temp4);