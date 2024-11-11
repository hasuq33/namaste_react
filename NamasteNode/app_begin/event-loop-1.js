const fs = require("fs"); 
const a = 100; 

setImmediate(()=>console.log("set Immediate Function called"));

fs.readFile("./file.txt","utf8",()=>{
  console.log("file read CallBack Function");   
}); 

setTimeout(()=>{
    console.log("setTimeout CallBack Function"); 
},0); 

function printA(){
    console.log("A",a); 
}; 

printA();
console.log("Last Line of the File!");