const crypto = require('node:crypto');
console.log("Hello World!");

var a =15;
var b =16;
 
// Synchronous Function - Will blocl the main thread - Don't use it 
crypto.pbkdf2Sync("password","salt",5000000,50,"sha512")
console.log("Hello World!");

// Password based key Derived Function
// Async Function
crypto.pbkdf2("password","salt",5000000,50,"sha512",(err, derivedKey) => {
    console.log("Derived Key: ", derivedKey.toString("hex"));
})

function multiplyFn(x,y){
    const result = x*y ;
    return result;
}

var c = multiplyFn(a,b); 

console.log("Multiplication Result: ", c);