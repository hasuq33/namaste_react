// Function Statement
function a(){
    console.log("A is called!");
}
a();

// Function Expressions 
var b = function(){
    console.log("b is called!");
}
b();

// Anonymous Functions
// function (){

// }


// Named Function Expressions
var c = function xyz(){
    console.log(xyz);
}
c();

// First Class Functions - Ability to be used like values
// Functions are like First Class Citizens 

var d = function (params){
        return function xyz(){

        }
}
console.log(d())

