//lexical scope
// lexical scope means  myfun2 want to myvar value but inside myfun2 myvar value not present so myfun2 check that value in their lexical scope that means inside function fun .this is nothing but lexical scope.
const myvar = "value1";
function myfun(){
    // const myvar = "value1";
    const fun =function(){
        // const myvar = 45;
        const myfun2 = () => {
            console.log("inside fun"+myvar);
        }
        myfun2();
    }
    fun();
    console.log("inside myfun");
}

myfun();