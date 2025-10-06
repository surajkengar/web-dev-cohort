//reduce method
// reduce method is used to take a array and reduce it into single value.
//in reduce method call back function take a parameter accumulator , curr_value ,index , array.
// accumulator is used to store a result at each  step, curr_value means each step current value in array, index at each step of that element in array. array is whole array respectively.
//it return a single value 

// 1)
const num=[1,2,3,4,5,6];

const total = num.reduce((total1 , num1) => {
    return total1 + num1; 0 ;
})

console.log(total);

// 2)

const info = [
    {name : "suraj" , age : 23 , gender : "male" },
    {name : "santosh" , age : 24 , gender : "male"},
    {name : "yuga" , age : 23 , gender : "male"}
]

const total2 = info.reduce((total , curr_age) => {
    return total + curr_age.age ;
},0)

console.log(total2);

//3)

const car =[
    {name:"swift", color:"white",seater:5},
    {name:"ertiga",color:"blue",seater:7},
    {name:"innova",color:"black",seater:9}
]

const total1=car.reduce(function(accumulater , currr_value){
    return (accumulater + currr_value.seater);
},0)

console.log(`total seat of all car is ${total1}`);

//4)

const info1 =[3,34,6,6,7,8];

const sum = info1.reduce((accumulater , curr_val) => {
    return (accumulater + curr_val)
},0);

console.log(sum);