const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

// setTimeout(() => {
//     heading.textContent = "heading1";
//     heading.style.color ="red";
//     setTimeout(() => {
//         heading2.textContent = "heading2";
//         heading2.style.color ="green";
//         setTimeout(() => {
//             heading3.textContent = "heading3";
//             heading3.style.color ="voilet";
//             setTimeout(() => {
//                 heading4.textContent = "heading4";
//                 heading4.style.color ="pink";
//                 setTimeout(() => {
//                     heading5.textContent = "heading5";
//                     heading5.style.color ="orange";
//                     setTimeout(() => {
//                         heading6.textContent = "heading6";
//                         heading6.style.color ="blue";
//                         setTimeout(() => {
//                             heading7.textContent = "heading7";
//                             heading7.style.color ="yellow";
            
//                 },1000);
//                     },1000);
//                 },1000);
            
//             },1000);
//         },1000);
//     },1000);
// },1000);


function myfun(element,text , color,time){
    return new Promise( (resolve , reject)=>{
        setTimeout(() => {
            if(element){
            element.textContent =text;
            element.style.color =color;
            resolve();
            }else{
                reject("element not found");
            }
        },time)
    }
        
    )
}

myfun(heading1 , "one","red",1000)
.then(()=>{return myfun(heading2 ,"two" ,"green",1000)})
.then(()=>{return myfun(heading3 , "three" ,"blue",1000)})
.then(()=>{return myfun(heading4 ,"four" ,"orange",1000)})
.then(()=>{return myfun(heading5 , "five" ,"yellow",1000)})
.then(()=>{return myfun(heading6 ,"six" ,"pink",1000)})
.then(()=>{return myfun(heading7 , "seven" ,"grey",1000)})




