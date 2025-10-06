// important arrays method
// forEach function is used to iterate through array and run function for each element in array.
//parameter in forEach function is element , index , array. this return through array.
// it cannot return the new array like map and filter function.

const temp = [2,4,5,6,8,7];

// function myfun(number , index){
//     console.log(`index is ${index} and number is ${number}`);
// }

// for(let i=0;i<temp.length;i++){
//     myfun(temp[i],i);
// }

// temp.forEach(myfun);

const num1=temp.forEach(function(num , index){
        console.log(`index is ${index} and number ${num}`);
})

const temp1 = [3,6,8,9,4,2];

// function myfun2(number , index){
//     console.log(`index is ${index} and  number is${number}`);
// }

// temp1.forEach(myfun2);

const temp2 =[3,6,3,2,8,9,];

temp2.forEach(function(num1,index){
    console.log(`index is ${index} and number is ${num1}`);
})


const temp3 = [4,3,5,7,8,9];

temp3.forEach(function(num1 , index){
    console.log(`index is ${index} and number is ${num1}`);
}
)