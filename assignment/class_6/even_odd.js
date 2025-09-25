    function check_even_odd(num){
        if(num % 2 == 0){
            return "Even";
        }
        else{
            return "Odd";
        }
    }

    let result = check_even_odd(32);
    console.log("given number is :" + result);