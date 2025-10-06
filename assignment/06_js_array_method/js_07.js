// find method
// find method used to search the item in array return them if they match the condition .
// it return only first item which match condition not all item that match condition.


// 1)
const str =["suraj","cat","dog","sagar"];

const temp = str.find((string) => {
        return string.length === 3;
})

console.log(temp);

// 2)

const str1 =["bar","dar","jar","suraj"];

const temp1 = str1.find((string) => {
        return string.length ===5
})

console.log(temp1);

//3)

const str3 =["pamu","nikhil","nandu","arru",];

const temp4 = str3.find((string) => {
    return string.length === 5;
})

console.log(temp4);


// 4)

const user =[
    {id:1, name:"suraj",age:23},
    {id:2,name:"sagar",age:24},
    {id:3,name:"santosh",age:35}
]

const myuser = user.find((element) => {
    return element.id==1;
})

console.log(myuser);

// 5)

const car =[
    {car:"swift",color:"white",wheel:4},
    {car:"ertiga",color:"black",wheel:4},
    {car:"innova",color:"blue",wheel:4}
]

const my_car=car.find((car1 )=>{
    return car1.color == "white";
})

console.log(my_car);