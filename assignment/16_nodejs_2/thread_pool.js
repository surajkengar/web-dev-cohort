const crypto =require("crypto");

process.env.UV_THREADPOOL_SIZE=2;
crypto.pbkdf2("passoward" , "salt",500000,50,"sha512",(err , key)=>{
    console.log("1 cryptography done");
})
crypto.pbkdf2("passoward" , "salt",500000,50,"sha512",(err , key)=>{
    console.log("2 cryptography done");
})
crypto.pbkdf2("passoward" , "salt",500000,50,"sha512",(err , key)=>{
    console.log("3 cryptography done");
})
crypto.pbkdf2("passoward" , "salt",500000,50,"sha512",(err , key)=>{
    console.log("4 cryptography done");
})

crypto.pbkdf2("passoward" , "salt",500000,50,"sha512",(err , key)=>{
    console.log("1 cryptography done");
})
crypto.pbkdf2("passoward" , "salt",500000,50,"sha512",(err , key)=>{
    console.log("2 cryptography done");
})
crypto.pbkdf2("passoward" , "salt",500000,50,"sha512",(err , key)=>{
    console.log("3 cryptography done");
})
crypto.pbkdf2("passoward" , "salt",500000,50,"sha512",(err , key)=>{
    console.log("4 cryptography done");
})
