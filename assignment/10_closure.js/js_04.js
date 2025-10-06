

// Ex - 4

function myfun(){
    let counter =0;
    return function(){
        if(counter < 1){
            console.log("hii , first time function called ");
            counter++
        }
        else{
            console.log("function called second time");
        }
    }
}

const temp = myfun();
temp();
temp();

