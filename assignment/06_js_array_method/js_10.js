//some method
// some method checks whether at least one element in array pass the condition
//even one element pass the condition return ------> true
//all element fail the condition return ------>fail.


// 1)
const num =[2,4,6,89,7,8,];

const isodd =num.some((num1) => {
    return num1 % 2 !==0;
})

console.log(isodd);

// 2)
const num1=[1,3,5,6,8];

const iseven =num1.some((num3) =>{
    return num3 % 2 === 0;
})

console.log(iseven);

// 3)

const product = [
    {p_name:"laptop" , price : 25000},
    {p_name:"mobile", price : 29000},
    {p_name:"tv" , price : 15000}
]

const price=product.some((price)=>{
    return price.price > 100000;
})
console.log(price);