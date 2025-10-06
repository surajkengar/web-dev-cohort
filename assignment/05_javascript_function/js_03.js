//function expression in javascript
//function expression cannot call before defining in code.
//function expression can be anonymous(without a name)

const iseven=function(num){
    if(num % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}

console.log(iseven(11));