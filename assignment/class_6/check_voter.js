function check_eligible(age){
    if(age >= 18){
        return "Eligible";
    }
    else{
        return "Not Eligible";
    }
}

let result = check_eligible(22);
console.log(`voter is ${result} for vote`);