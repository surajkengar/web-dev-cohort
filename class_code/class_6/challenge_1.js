// problem : create an array containing different types of teas .
const teas = ["green tea" , "black tea" , "white tea ", "oolong tea","hearble tea"];
//problem : Add chamomile tea to the existing teas of list 
teas.push("chamomile teas");
//problem : remove oolong teas from list of teas
const index = teas.indexOf("white tea ");
if(index > -1){
    teas.splice(index , 1);
}

//problem : filter the list to only include the tea that are cafinated 
const cafinnatedteas = teas.filter((tea) => tea !== "hearble tea");
console.log(cafinnatedteas);

//problem : sort the list of teas in alphabetical order
const test = ["vighnesh","suraj","mony","avinash"];
console.log(test.sort());

//problem : use a for loop to print each type of teas in array
for(let i=0;i<teas.length;i++){
    console.log(teas[i]);
}

//problem : use a loop to count the no. of teas that are  cafinated
let count=0;
for(let i=0;i<teas.length;i++){
    if(teas[i] != "hearble tea"){
        count++;
    }
}
console.log(count);

//problem : use a for loop to create a  new array with all the teas name in uppercase

let uppercaseTeas = [];
for(let i=0;i< teas.length ; i++){
    uppercaseTeas.push(teas[i].toUpperCase());

}
console.log(uppercaseTeas);

//problem : use a loop to find the tea name with the most characteristics
let  longest = "";
for(let i=0;i<teas.length;i++){
    if(teas[i].length > longest.length){
        longest=teas[i];
    }
}
console.log(longest);
//problrm : use a for loop to reverse the order of teas in the array
const reversearray =[]
for(let i=teas.length-1;i>=0;i--){
    reversearray.push(teas[i]);
}
 console.log(reversearray);