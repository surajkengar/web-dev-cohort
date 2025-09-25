function largest(a , b , c){
    if(a > b && a > c){
        return a;
    }
    else if(b > a &&  b > c){
        return b;
    }
    else{
        return c;
    }
}

let result = largest(20 , 30 , 10);
console.log("gretest number between a , b and c is : " + result);