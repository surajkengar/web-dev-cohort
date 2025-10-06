// function inside function.
const fun = (no1 , no2) => {
    const add = (num1 , num2) => {
        console.log(num1 + num2);
    }

    const subtract =(temp1 , temp2)=>{
        console.log(temp1 - temp2);
    }
    console.log("hello guys , i am suraj kengar");
    add(no1 , no2);
    subtract(no1,no2);
}

fun(4,2);