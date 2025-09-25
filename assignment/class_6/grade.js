function  calculate_grade( marks){
    if(marks >= 90 ){
        return "A";
    }
    else if(marks >= 80){
        return "B";
    }
    else if(marks >= 70){
        return "c";
    }
    else if(marks >= 60){
        return "D";
    }
    else{
        return "F";
    }
}

let result = calculate_grade(86);
console.log("your grade is :" + result);