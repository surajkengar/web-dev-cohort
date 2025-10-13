console.log("script start");

const myfried =new Promise((resolve , reject) => {
        const foodready =true;

        if(foodready ){
            resolve("food is ready");
        }
        else{
            reject("food is not available");
        }
})

myfried.then(
    (msg) => {
        console.log(msg);
    }
).catch(
    (error) => {
        console.log(error)
    }
)

setTimeout(() => {
    console.log("inside setimeout function");
})

console.log("script end");