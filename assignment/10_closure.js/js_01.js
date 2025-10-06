//closure is formed when inner function remember and can access outer variable even after outer function has complete their execution.




function myfun(f_name , l_name){
    function fun1(){
        console.log(f_name +" "+l_name);
    }

    return fun1;
}

const temp =myfun("suraj" , "kengar");

// myfun complete their execution and return the fun1 and that function store in temp. but fun not come in temp alone they come with all their lexical variable.
//which is f_name and l_name and when we try to access them in temp it will work.

temp();
