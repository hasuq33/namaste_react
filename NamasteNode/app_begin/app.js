require('./xyz.js')
const {CalculateSum , x , Multiplication} = require('./calculate');
const data = require('./data');
const util = require("node:util");
console.log(__dirname); 
console.log(__filename);


CalculateSum(3,4);
Multiplication(3,4);
console.log(JSON.stringify(data));
console.log(x);
console.log(this)
console.log(globalThis === global);