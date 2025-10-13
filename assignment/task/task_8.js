const storeItems = [
    { id: 1, name: "Laptop", stock: 5, price: 50000 },
    { id: 2, name: "Phone", stock: 10, price: 20000 },
    { id: 3, name: "Headphones", stock: 9, price: 2000 },
    { id: 4, name: "Keyboard", stock: 7, price: 1500 }
];

function check_availability(userselection){
    return new Promise((resolve,reject) => { 
        console.log("checking availability of item");

        setTimeout(()=>{
            const availability = userselection.filter((itemId) => {
            const item =storeItems.find((temp) => {return temp.id == itemId});
            return !item || item.stock <= 0;
        }
        )
         if(availability.length > 0){
            reject("item not available")
        }else{
            const selectedItem =storeItems.filter((item) => {
                return userselection.includes(item.id);
            })
            resolve(selectedItem);
        }
        },2000)
        
        
       
    })
}


function createOrder(item){
    return new Promise((resolve)=>{
       
        console.log("creating order....");
        setTimeout(()=>{
            const orderId =Math.floor(Math.random()*1000);
            console.log(`order is created with orderId : ${orderId}`);
            resolve({orderId,item});
        },1000)
    })
}

function makePayment(order){
    return new Promise((resolve)=>{
        console.log("paynment is in process");

        setTimeout(()=>{
            const paynment_status = "success";
            console.log(`paynment successfully of id : ${order.orderId}`);

            resolve({...order , paynment_status })
        },1000)
    })
}

function order_summary(info){
        return new Promise((resolve)=>{
            console.log("generating order summary.....");
            setTimeout(()=>{
                console.log(
             `order id : ${info.orderId}`,
             `paynment status : ${info.paynment_status}`,
             `items : ${info.item.map((i)=>{console.log(i.name)})}`


            )
            },1000)
            
        })
}
const userSelectedItems = [1, 2, 4];

check_availability(userSelectedItems)
.then(createOrder)
.then(makePayment)
.then(order_summary)
.catch((error) => {
    console.log(error)
})
