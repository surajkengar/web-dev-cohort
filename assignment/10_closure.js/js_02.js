


// ex - 2

function myfun( x){
    const a ="arg1";
    const b ="arg2";

    return function(){
        console.log( a , b , x);
    }
}

const temp = myfun("arg3");
temp();

// 