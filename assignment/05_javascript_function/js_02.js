// function for checking number is even or not

function iseven(num){
    if(num % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}

console.log(iseven(11));

// function for printing first character

function first_string(newstr){
    return newstr[0];
}

console.log(first_string("abc"));

// function for checking terget in array

function first_array(array,target){
    for(let i=0;i < array.length;i++){
        if(array[i]==target){
            return true;
        }
    }

    return false;
}

let arr = [1,2,3,4,5];
console.log(first_array(arr,78));