//object destructing 

const person={
    name1:"suraj",
    name2:"sagar",
    name3:"yuga",
    name4:"santosh"
}

const{name1:var1 , name2:var2 ,...restprop}=person;

console.log(restprop);
console.log(var1);


