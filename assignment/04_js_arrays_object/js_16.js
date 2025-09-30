// spread operator in object
const value1="suraj";
const value2="sagar";
const value3="name1";
const value4="name2";
const obj1={
    key1:value1,
    key2:value2
}

const obj2={
    key3:value3,
    key4:value4
}

const newobj={ ...obj1 , ...obj2};
console.log(newobj)

