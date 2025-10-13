

function myfun(){
    return new Promise(
        (resolve,reject ) => {
            const check =true;
            if(check){
                resolve("appointnment is booked");
            }
        }
    )
}

myfun().then((msg) => {return msg})
.then((msg1) => {return msg1 + "on monday"})
.then((msg2) => {return msg2 +"please check"})
.then((msg3)=> {console.log(msg3)});