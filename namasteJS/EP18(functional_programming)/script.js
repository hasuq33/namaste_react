// This is the Beauty of of Functional Programming
// Thid code is reusable and modular

const radius = [3,1,2,4];

const area = function(radius){
    return Math.PI*radius*radius;
}

const circumRefernce = function(radius){
    return 2* Math.PI* radius;
}

const diameter = function(radius){
    return 2*radius;
}

// This is best example of pollyfill
Array.prototype.calculate = function(logic){
    const output = [];
    for(let i=0; i < this.length; i++){
        output.push(logic(this[i]));
    }

    return output;
}

console.log(radius.map(area));
console.log(radius.calculate(area))

// This is just a way let's make our code more beutiful and code is above don't look it below
// const calculate = function(radius,logic){
//     const output = [];
//     for(let i=0; i < radius.length; i++){
//         output.push(logic(radius[i]));
//     }

//     return output;
// }

// console.log(calculate(radius,area));
// console.log(calculate(radius,circumRefernce));
// console.log(calculate(radius,diameter));

// function x(){
//     console.log("Namste JS");
// }

// // This Function y called higher Order Functionn beacuse it takes functions as paramaters
// function y(x){
//     x();
// }

// y(x);