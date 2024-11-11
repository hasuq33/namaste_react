const fs = require("fs"); 

const https = require("https"); 

console.log("Hello World!"); 

var a = 1002; 
var b = 20; 

https.get("https://dummyjson.com/products/1",(res)=>{
    console.log("Data Fetched Successfully!"); 
});

setTimeout(()=>{
    console.log("setTimeout called after 5 seconds");
},5000); 

fs.readFile("./file.txt","utf8",(err, data)=>{
    console.log("File Data: ", data); 
}); 

function multiplyFn(x,y){
    const result = x*y ;
    return result;
}

var c = multiplyFn(a,b); 

console.log("Multiplication Result: ", c);