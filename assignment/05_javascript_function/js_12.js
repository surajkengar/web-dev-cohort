// function returning function

function temp(){
    function temp1(){
        console.log("hello world");
    }

    return temp1;
}

let temp3 = temp();

temp3();