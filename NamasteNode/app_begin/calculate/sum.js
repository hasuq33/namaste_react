// Modules protect their variables and functions from leaking 

var x = "Hello World!";

z = 'Harshiv'

function CalculateSum(a,b){
    console.log(a+b);
}

module.exports = {CalculateSum , x};
// module.exports.CalculateSum = CalculateSum;
// module.exports.x = x;