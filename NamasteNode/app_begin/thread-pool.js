const fs = require('fs');
const crypto = require('crypto');


process.env.UV_THREADPOOL_SIZE = 10;

crypto.pbkdf2("password","salt",5000000,50,"sha512",(err, key)=>{
    console.log("1 password")
})
crypto.pbkdf2("password","salt",5000000,50,"sha512",(err, key)=>{
    console.log("2 password")
})
crypto.pbkdf2("password","salt",5000000,50,"sha512",(err, key)=>{
    console.log("3 password")
})
crypto.pbkdf2("password","salt",5000000,50,"sha512",(err, key)=>{
    console.log("4 password")
})
crypto.pbkdf2("password","salt",5000000,50,"sha512",(err, key)=>{
    console.log("5 password")
})
crypto.pbkdf2("password","salt",5000000,50,"sha512",(err, key)=>{
    console.log("6 password")
})