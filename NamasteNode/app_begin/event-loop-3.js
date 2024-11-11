const fs = require('fs');

setImmediate(()=> console.log("Set Immediate")); 

setTimeout(()=>console.log("Timer expired"),0); 

Promise.resolve("Promise").then(()=>console.log("Promise")); 

fs.readFile("./file.txt","utf8",()=>{
    setTimeout(()=>console.log("2n timer"),0); 
    process.nextTick(()=>console.log("2nd nextTick")); 

    setImmediate(()=>console.log("2nd Set Immediate")); 

    console.log("File Reading CB"); 
})

process.nextTick(()=> console.log("nextTick")); 

console.log("Last Line of the File"); 