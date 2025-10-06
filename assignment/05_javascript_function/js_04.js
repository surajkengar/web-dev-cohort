// arrow function in a javascript



// 1)
const iseven =(num) => {
    if(num % 2 == 0){
        console.log(true);
    }
    else{
        console.log(false);
    }
}

iseven(11);

// 2)

const newstr =(str) => {
    return str[0];
}

console.log(newstr("suraj"));

const isarray = (array , target) => {
    for(let i=0;i < array.length;i++){
        if(array[i] == target){
            return i;
        }
    }

    return -1;
}

let arr =[1,2,3,4,5,6];
console.log(isarray(arr , 15));

// it is possible only if parameter is only one
const odd =  odd_num =>  odd_num % 2 != 0;

console.log(odd(11));


// it is also possible we have a only one parameter

const isgreat = num => {
    if(num > 10){
        console.log("number is greater ");
    }
    else{
        console.log("number is smaller");
    }
}
isgreat(11);

