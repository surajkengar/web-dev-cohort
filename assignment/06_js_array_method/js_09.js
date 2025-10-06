// every method
// every method check that every element in array pass the given element .
// if all condition true return ----> true
// if one condition return false ------> false


//1)
const num = [2,34,3,8,10];

const iseven = num.every((num) => {
    return num % 2 === 0;
})

console.log(iseven);

// 2)

const num1 =[1,3,5,7,9];

const isodd = num1.every((num) => {
    return num%2 !==0;
})

console.log(isodd);

// 3)

const product =[
    {name:"laptop" , price : 22000},
    {name:"mobile",price:23000},
    {name:"tv",price:19000}
]

const price=product.every((pro) => {
    return pro.price < 30000;
})
console.log(price);