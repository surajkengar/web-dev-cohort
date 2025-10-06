// hoisting 

// hoisting for function declaration 
// in a function declaration it is possible to call a function before defining that function in a code.
console.log(iseven(12));
function iseven(num){
    if(num % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}


//hoisting for function expression
//in a function expreesion it is not possible to call a function before defing that function expression in a code.

const is_odd = function(num){
    if(num % 2 != 0){
        console.log("odd number");
    }
    else{
        console.log("even number");
    }
}

is_odd(12);

