const heading1=document.querySelector(".heading1");
const heading2=document.querySelector(".heading2");
const heading3=document.querySelector(".heading3");
const heading4=document.querySelector(".heading4");
const heading5=document.querySelector(".heading5");
const heading6=document.querySelector(".heading6");
const heading7=document.querySelector(".heading7");



// setTimeout(()=>{
//     heading1.textContent ="one";
//     heading1.style.color ="red";
//     setTimeout(()=>{
//         heading2.textContent ="two";
//         heading2.style.color ="green";
//         setTimeout(()=>{
//              heading3.textContent ="three";
//              heading3.style.color ="yellow";
//              setTimeout(()=>{
//                 heading4.textContent ="four";
//                 heading4.style.color ="blue";
//                 setTimeout(()=>{
//                     heading5.textContent ="five";
//                     heading5.style.color ="orange";
//                     setTimeout(()=>{
//                         heading6.textContent ="six";
//                         heading6.style.color ="grey";
//                         setTimeout(()=>{
//                             heading7.textContent ="seven";
//                             heading7.style.color ="voilet";
    
//                         },1000)
    
//                     },1000)
    
//                 },1000)
    
//             },1000)
    
//         },1000)

    
//     },1000)
    
// },1000)


function myfun(element,text,color,time){
    return new Promise(
        (resolve , reject)=>{
            setTimeout(()=>{
                if(element){
                    element.textContent = text;
                    element.style.color =color;
                    resolve();
                }
                else{
                    reject("element not found");
                }
            },time)
        }
    )
}

myfun(heading1 ,"one","green",1000)
.then(()=>{return myfun(heading2,"two","red",1000)})
.then(()=>{return myfun(heading3,"two","yellow",1000)})
.then(()=>{return myfun(heading4,"two","pink",1000)})
.then(()=>{return myfun(heading5,"two","grey",1000)})
.then(()=>{return myfun(heading6,"two","blue",1000)})
.then(()=>{return myfun(heading7,"two","orange",1000)})
