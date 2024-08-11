let my_name = {
    firstName: "Harshiv", 
    secondName:"Joshi",
    // We can Do like this but this is not a good idea to keep function in object 
    //It should be seprater
    // printName: function(){
    //     console.log(this.firstName + " " + this.secondName);
    // }
}

const printName = function(town){
    console.log(this.firstName + " " + this.secondName+ " is from " + town);
    return function innerFunction(bhau){
        console.log(this.firstName + " " + this.secondName+" is From"+ " Ahiya! "+ town + " "+bhau)
    }.bind(this);
}

printName.call(my_name,"Kapadvanj");

let name2 = {
    firstName:"Yari", 
    secondName:"Shukla",
}


// Note- Basically Call name2 refers to this and second is town argumentts first argument by default is 
// referncing this 
printName.call(name2,"Kalol");

printName.apply(name2,["Kolol","Gujarat"]);

// Here Bind is creating a separate a new copy of printName in name3 
let name3 = printName.bind(name2,"Kapadvanj");

name3()("Foram Tie tie");