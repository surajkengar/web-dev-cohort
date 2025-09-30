//object inside array

const info=[
    {userid:1,name:"suraj",gender:"male"},
    {userid:2,name:"sagar",gender:"male"},
    {userid:3,name:"yuga",gender:"male"}
]

console.log(info);
for(let user of info){
    console.log(user.userid);
}
