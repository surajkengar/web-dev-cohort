// // // using callback function

// // // function myfun(time ,id){
// // //     console.log("create order");

// // //     setTimeout(
// // //         () => {
// // //             console.log(`order created successfully of id ${id}`);
// // //         },time
// // //     )
// // // }

// // // // myfun();

// // // function myfun1(time,id){
    
// // //     setTimeout(()=>{console.log(`paynment successfully of of ${id}`);},time)
// // // }

// // // function myfun2(time,id){
// // //     setTimeout((time)=>{
// // //         console.log(`order summary created successfully of id ${id}`);
// // //     },time)
// // // }

// // // myfun( 3000 ,121,
// // //     myfun1(6000 ,121,
// // //         myfun2( 10000,121

// // //         )
// // //     )
// // // )


// // //using promise

// // // function myfun(id,time){
// // //     return new Promise((resolve,reject) => {
// // //         console.log("create order")
// // //             setTimeout(()=>{
// // //                 resolve(`order created successfully of id ${id}`)
// // //             },time) 
// // //     })
// // // }

// // // function myfun1(id,time){
// // //     return new Promise((resolve,reject) => {
        
// // //             setTimeout(()=>{
// // //                 resolve(`paynment successfully of id ${id}`)
// // //             },time) 
// // //     })
// // // }

// // // function myfun2(id,time){
// // //     return new Promise((resolve,reject) => {
        
// // //             setTimeout(()=>{
// // //                 resolve(`order summary created of id ${id}`)
// // //             },time) 
// // //     })
// // // }


// // // myfun(101,3000)
// // // .then((msg)=>{
// // //     console.log(msg);
// // //     return myfun1(101,6000)
// // // })
// // // .then((msg)=>{
// // //     console.log(msg);
// // //     return myfun2(101,10000)
// // // })
// // // .then((msg)=>{
// // //     console.log(msg);
    
// // // })

// // //using async await
// // function myfun(id,time){
// //     return new Promise((resolve,reject) => {
// //         console.log("create order")
// //             setTimeout(()=>{
// //                 resolve(`order created successfully of id ${id}`)
// //             },time) 
// //     })
// // }

// // function myfun1(id,time){
// //     return new Promise((resolve,reject) => {
        
// //             setTimeout(()=>{
// //                 resolve(`paynment successfully of id ${id}`)
// //             },time) 
// //     })
// // }

// // function myfun2(id,time){
// //     return new Promise((resolve,reject) => {
        
// //             setTimeout(()=>{
// //                 resolve(`order summary created of id ${id}`)
// //             },time) 
// //     })
// // }

// // async function process(){
// //     try{
// //     const msg1 =await myfun(102,3000);
// //     console.log(msg1)
// //     const msg2=await myfun1(102,6000);
// //     console.log(msg2)
// //     const msg3=await myfun2(102,10000);
// //     console.log(msg3)
// //     }
// //     catch{

// //     }
// // }

// // process();




// // Available items in store
// const storeItems = [
//     { id: 1, name: "Laptop", stock: 5, price: 50000 },
//     { id: 2, name: "Phone", stock: 10, price: 20000 },
//     { id: 3, name: "Headphones", stock: 0, price: 2000 },
//     { id: 4, name: "Keyboard", stock: 7, price: 1500 }
// ];

// // Step 1: Select items (simulate user input)
// function selectItems(userSelection) {
//     return new Promise((resolve, reject) => {
//         console.log("🛒 Checking item availability...");
//         setTimeout(() => {
//             const unavailable = userSelection.filter(itemId => {
//                 const item = storeItems.find(i => i.id === itemId);
//                 return !item || item.stock <= 0;
//             });

//             if (unavailable.length > 0) {
//                 reject(`❌ Items not available: ${unavailable.join(", ")}`);
//             } else {
//                 const selectedItems = storeItems.filter(i => userSelection.includes(i.id));
//                 resolve(selectedItems);
//             }
//         }, 1000);
//     });
// }

// // Step 2: Create Order
// function createOrder(items) {
//     return new Promise((resolve) => {
//         console.log("📝 Creating order...");
//         setTimeout(() => {
//             const orderId = "ORD" + Math.floor(Math.random() * 1000);
//             console.log(`✅ Order created with ID: ${orderId}`);
//             resolve({ orderId, items });
//         }, 2000);
//     });
// }

// // Step 3: Payment
// function makePayment(order) {
//     return new Promise((resolve) => {
//         console.log("💳 Processing payment...");
//         setTimeout(() => {
//             const paymentStatus = "Success";
//             console.log(`✅ Payment successful for Order ID: ${order.orderId}`);
//             resolve({ ...order, paymentStatus });
//         }, 2000);
//     });
// }

// // Step 4: Order Summary
// function showOrderSummary(order) {
//     return new Promise((resolve) => {
//         console.log("📦 Generating order summary...");
//         setTimeout(() => {
//             console.log(`
//             🧾 ORDER SUMMARY
//             -----------------
//             Order ID: ${order.orderId}
//             Payment: ${order.paymentStatus}
//             Items: ${order.items.map(i => i.name).join(", ")}
//             Total: ₹${order.items.reduce((sum, i) => sum + i.price, 0)}
//             `);
//             resolve();
//         }, 1000);
//     });
// }

// // Main flow using Promises
// function startProcess(userSelection) {
//     selectItems(userSelection)
//         .then(createOrder)
//         .then(makePayment)
//         .then(showOrderSummary)
//         .catch(error => console.log(error));
// }

// // Simulate user selecting multiple items
// const userSelectedItems = [1, 2, 4]; // Laptop, Phone, Keyboard
// startProcess(userSelectedItems);

// Available items in store
const storeItems = [
    { id: 1, name: "Laptop", stock: 5, price: 50000 },
    { id: 2, name: "Phone", stock: 10, price: 20000 },
    { id: 3, name: "Headphones", stock: 0, price: 2000 },
    { id: 4, name: "Keyboard", stock: 7, price: 1500 }
];

// Step 1: Select items
function selectItems(userSelection) {
    return new Promise((resolve, reject) => {
        console.log("🛒 Checking item availability...");
        setTimeout(() => {
            const unavailable = userSelection.filter(itemId => {
                const item = storeItems.find(i => i.id === itemId);
                return !item || item.stock <= 0;
            });
            
            if (unavailable.length > 0) {
                reject(`❌ Items not available: ${unavailable.join(", ")}`);
            } else {
                const selectedItems = storeItems.filter(i => userSelection.includes(i.id));
                resolve(selectedItems);
            }
        }, 1000);
    });
}

// Step 2: Create Order
function createOrder(items) {
    return new Promise((resolve) => {
        console.log("📝 Creating order...");
        setTimeout(() => {
            const orderId = "ORD" + Math.floor(Math.random() * 1000);
            console.log(`✅ Order created with ID: ${orderId}`);
            resolve({ orderId, items });
        }, 2000);
    });
}

// Step 3: Payment
function makePayment(order) {
    return new Promise((resolve) => {
        console.log("💳 Processing payment...");
        setTimeout(() => {
            const paymentStatus = "Success";
            console.log(`✅ Payment successful for Order ID: ${order.orderId}`);
            resolve({ ...order, paymentStatus });
        }, 2000);
    });
}

// Step 4: Order Summary
function showOrderSummary(order) {
    return new Promise((resolve) => {
        console.log("📦 Generating order summary...");
        setTimeout(() => {
            console.log(`
            🧾 ORDER SUMMARY
            -----------------
            Order ID: ${order.orderId}
            Payment: ${order.paymentStatus}
            Items: ${order.items.map(i => i.name).join(", ")}
            Total: ₹${order.items.reduce((sum, i) => sum + i.price, 0)}
            `);
            resolve();
        }, 1000);
    });
}

// Main async function
async function startProcess(userSelection) {
    try {
        const selectedItems = await selectItems(userSelection);
        const order = await createOrder(selectedItems);
        const payment = await makePayment(order);
        await showOrderSummary(payment);
        console.log("🎉 Order process completed!");
    } catch (error) {
        console.log(error);
    }
}

// Simulate user selecting multiple items
const userSelectedItems = [1, 2, 4]; // Laptop, Phone, Keyboard
startProcess(userSelectedItems);
