const arr =[12,4,3,12,3,4,10,12,1,3,4,7];

// const map1=new Map();

// arr.forEach((value1) => {
//     if(map1.has(value1)){
//        map1.set(value1,map1.get(value1)+1)
//     }
//     else{
//         map1.set(value1 , 1);
//     }
    

// }
// )

// console.log(map1);
// let temp =arr.length -1 ;

// arr.forEach(
//     (value1 , index) => {
//         if(index < temp){
//             let temp1 = value1;
//             arr[index] = arr[temp];
//             arr[temp]=temp1;
//             temp--;


//         }
//     }
// )

// while(temp1 < temp){
//     let temp2 =arr[temp1];
//     arr[temp1]=arr[temp];
//     arr[temp]=temp2;
//     temp--;
//     temp1++;
// }


// console.log(arr);

// let prime = 0;
// let notprime =0;

// function isprime(num){
//      let check = true;
//     for(let i=2;i < num / 2;i++){
//         if(num % i == 0){
//             check = false;
//         }
        
//     }
//     if(check == true){
//         return true;
//     }
//     else{
//         return false;
//     }


// }
// console.log(isprime(8));


// arr.forEach(
//     (value) => {
//         if(isprime(value)){
//             prime++;
//         }
//         else{
//             notprime++;
//         }
//     }
// )

// console.log(prime , notprime);


const str ="surajkengar";

console.log(str)

const map1 =new Map();

for(let i=0;i<str.length;i++){
    
        if(map1.has(str[i])){
            console.log(str[i])
            map1.set(str[i] , map1.get(str[i])+1);
        }else{
            map1.set(str[i],1);
        }
    
}

console.log(map1);




