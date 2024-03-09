console.log("Start");
// Javascript is the single thread language

function cb(){
    console.log("Function");
}

cb();

setTimeout(function cb(){
    console.log("Callback");
},5000);

console.log("End");

let startDate = new Date().getTime();
let enddate = startDate;
console.log(enddate);

// Bahot kharcha karavata hai ye while loop
// while(enddate < startDate + 10000){
//     enddate = new Date().getTime();
//     console.log(enddate);
// }

console.log("Our While is expired!");
