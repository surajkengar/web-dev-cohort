function myfun(callback){
    console.log("callback function execute");
    callback();
}

function myfun2(){
    console.log("myfun2 execute");
}

myfun(myfun2);