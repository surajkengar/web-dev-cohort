const child =document.querySelector(".child");
const parent =document.querySelector(".parent");
const grandparent =document.querySelector(".grandparent");

child.addEventListener("click",() => {
    console.log("clicked child capturing");
},true);

parent.addEventListener("click",() => {
    console.log("clicked parent capturing");
},true);

grandparent.addEventListener("click",() => {
    console.log("clicked grandparent capturing");
},true);

child.addEventListener("click",() => {
    console.log("clicked child bubbling");
});

parent.addEventListener("click",() => {
    console.log("clicked parent bubbling");
});

