

// Ex -3

function myfun(power){

    return function(num){
        return num ** power;
    }
}

const square = myfun(2);
const ans = square(3);
console.log(ans);