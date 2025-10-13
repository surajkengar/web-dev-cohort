const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");

function myfun(){
    return new Promise(() => {
       setTimeout(()=>{
            heading.textContent ="one";
            heading.style.color ="green";
       },1000)
    })
}
 
myfun.then(
    (heading1) => {
    
    }
)