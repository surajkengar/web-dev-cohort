
const mypromise =new Promise(
    (resolve , reject) => {
        const foodready =false;

        if(foodready){
            resolve("food is ready and deliver in 20 min");
        }
        else{
            reject("food is not available");
        }
    }
)

mypromise.then((msg)=>{
    console.log(msg);
}).catch((error) => {
    console.log(error);
})