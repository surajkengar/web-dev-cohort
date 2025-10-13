const p1 = new Promise(
    (resolve,reject) => {
        setTimeout(() => {
        reject("first reject");
    },1000)
    }
);

const p2 = new Promise(
    (resolve,reject) => {
        setTimeout(() => {
        reject("second reject");
    },1000)
    }
)

const p3 =new Promise(
    (resolve,reject) => {
        setTimeout(() => {
        reject('third reject')
    },1000)
    }
)

// p1.then((value) => {console.log(value)})
// p2.then((value) => {console.log(value)})
// p3.then((value) => {console.log(value)})

// Promise.any([p3,p2,p1])
// .then(
//     (value) => {
//         console.log(value);
//     }
// )

Promise.race([p1 , p2 , p3] )
.then(
    (value) => {
        console.log(value);
    }
)
.catch(
    (error) => {
        console.log(error);
    }
)
