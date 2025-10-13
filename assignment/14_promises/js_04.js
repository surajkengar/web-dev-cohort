

function myfun(){
    return new Promise(
        (resolve , reject) => {
            const check = true;
            if(check){
                resolve("appointnment booked");
            }
            else{
                reject("appointnment not book");
            }
        }
    )
}

myfun().then(
    (msg) => {
        console.log(msg);
        return msg+" on monday";
    }
).then(
    (msg1) => {
        console.log(msg1);
         return msg1 + " please check";
    }

   
).then(
    (msg2) => {
        console.log(msg2);
    }
)