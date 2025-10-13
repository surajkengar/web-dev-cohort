

function mypromise(){
    return new Promise(() => {
        const find =true;

        if(find){
            console.log("data fetched");
        }
        else{
            console.log("data not fetched");
        }
    })
}

mypromise().then(
    (msg) => {
        console.log(msg);
    }
).catch(
    (error) => {
        console.log(error);
    }
)