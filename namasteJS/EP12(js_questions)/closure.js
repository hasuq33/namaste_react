// This is the best example of data hiding and encapsulations

// function counter(){
//     var count = 0;

//     return function incrementCounter(){
//         count++;
//         console.log(count);
//     }
// }
// var counter1 = counter();
// counter1();
// counter1();
// counter1();

// // Counter2 and counter1 will intialize both different variables 
// var counter2 = counter();
// counter2();counter2();counter2();counter2();counter2();counter2();counter2();

/** Lets's create a constructor functions */

function Counter(){
    var count = 0;

    this.incrementCounter = function (){
        count++;
        console.log(count);
    }

    this.decrementCounter = function(){
        count--;
        console.log(count);
    }
}

var counter1 = new Counter(); //Here we use new keyword because we construct the constructor 
counter1.incrementCounter();
counter1.incrementCounter();
counter1.decrementCounter();

// Let's see the example of garbage collections
function a(){
    var x = 0; z =10;
    return function b(){
        console.log(x);
    }
}

var y = a();

y();