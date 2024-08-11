
let myName = {
    firstName: "Harshiv", 
    secondName:"Joshi",
}

let printName = function(city,state){
    console.log(this.firstName + " " + this.secondName + " from "+city + " " + state);
}

// This is our js Default Bind Method
let printName2 = printName.bind(myName,"Kapadvanj");
printName2("Gujarat");

// Let's create our new custom Bind Method

Function.prototype.myBind = function(...args){
    // Here this will be refer the Funtion  
    let obj = this;
   let params = args.slice(1);
    return function(...arg2){
        obj.apply(args[0],[...params, ...arg2]);
    }
}

// This is my Custom Bind Methd 
let printName3 = printName.myBind(myName,"Kalol")

printName3("Gujarat");

