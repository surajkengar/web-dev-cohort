

const heading1=document.querySelector(".heading1");
const heading2=document.querySelector(".heading2");
const heading3=document.querySelector(".heading3");
const heading4=document.querySelector(".heading4");
const heading5=document.querySelector(".heading5");
const heading6=document.querySelector(".heading6");
const heading7=document.querySelector(".heading7");


// function myfun(element , text, color,time ,onsuccess , onfailure){
//        setTimeout( ()=>{
//         element.textContent = text;
//         element.style.color = color;

//         if(onsuccess){
//             onsuccess();
//         }else{
//             onfailure();
//         }
//        },time)
// }


// myfun(heading1 , "one" , "red" , 1000,() => {
//     myfun(heading2,"two","blue",1000,() => {
//             myfun(heading3,"three","green",1000,() => {
//                  myfun(heading4,"four","yellow",1000,() => {
//                     myfun(heading5,"five","orange",1000,() => {
//                          myfun(heading6,"six","grey",1000,() => {
//                             myfun(heading7,"seven","pink",1000,() => {
//                             },()=>{console.log("heading1 is not exist");})
//                          },()=>{console.log("heading1 is not exist");})
//                     },()=>{console.log("heading1 is not exist");})
//                 },()=>{console.log("heading1 is not exist");})
//            },()=>{console.log("heading1 is not exist");})
//     },()=>{console.log("heading1 is not exist");})

        
// })

function myfun(element,text,color,time){
    return new Promise(
        (resolve ,reject) =>{
        setTimeout(()=>{
            if(element){
            element.textContent =text;
            element.style.color =color;
            resolve();
            }else{
                reject("heading not found");
            }
        },time);

    }
    )
}

myfun(heading1,"one","red",1000)
.then(()=>{return myfun(heading2 ,"two","green",1000)})
.then(()=>{return myfun(heading3 ,"three","pink",1000)})
.then(()=>{return myfun(heading4 ,"four","blue",1000)})
.then(()=>{return myfun(heading5 ,"five","grey",1000)})
.then(()=>{return myfun(heading6 ,"six","orange",1000)})
.then(()=>{return myfun(heading7 ,"seven","yellow",1000)})


