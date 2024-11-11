const fs = require("fs");
const a = 100;

setImmediate(()=>console.log("setImmediate"));
Promise.resolve(()=>console.log("Promise")); 
fs.readFile("./file.txt","utf8",()=>console.log("readFile"));
setTimeout(()=>console.log("Timer Expired"),0); 
process.nextTick(()=>console.log("Proccess.NextTick")); 

function printA(){
    console.log("a=",a);
}

printA();

console.log("Last Line of this code");