'use strict';
// this in the global space
console.log(this); //globalObject - window , global 

// this inside a function
function x(){
    // the value depends on strict and not strict mode 
    console.log(this); //strict mode it is undefined
}

// this inside non-strict mode - (this substitution)

// if the value of this keyword undefined or null this keyword will be replaced 
// will be replaced with globalObject only in non strcit mode 
x();
window.x();

// this keyword value depends on how this is called (window)

// this keyword in object 

// const obj = {
//     a:10,
//     x: function(){
//         console.log(this);
//     }
//     // inside object this keyword takes the value of object iteself
// }

// obj.x();


const student = {
    name: "Harshiv",
    printName: function(){
        console.log(this.name);
    },
    sayHi: function(...age){
        console.log(this.name+ " age is "+ age);
    }
}

student.printName();

const student2 = {
    name: "Foram",
}

student.printName.call(student2); //Here I override the value in student in this keyword using call
let printName = student.printName.bind(student2); //Here I bind the method in variable 
printName()

student.sayHi.apply(student,[23])  //apply takes the twor arguments one is object and function's arguments iteself in array

// this keyword inside arrow function

const test = {
    a:10,
    x:()=>{
        console.log(this);
    }
}

test.x();

// this inside the nested arrow function
const test2 = {
    a:10,
    x:function(){
        const y= ()=>{
            console.log(this);
        }
        // note: arrow function does not it's own this binding so it bydefault take it's lexical environment value means current function or global object value 
        y();
    }
}

test2.x();
