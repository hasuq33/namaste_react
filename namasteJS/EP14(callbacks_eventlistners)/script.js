// What is callback functions
setTimeout(function(){
    console.log("Hello World!");
}, 5000);

function x(y){
    console.log("x is called");
    y();
};

x( function y(){
    console.log("Y is called!");
})

// Javascript is a synchronous and single-threaded language 

// Blocking the main thread

function attachEventListner(){
    let count =  0;

    function xyz(){
        console.log("Yes I am called", ++count);
    }
    const button = document.querySelector('#clickMe');
    button.removeEventListener('click',xyz);

    document.getElementById('clickMe').addEventListener('click', xyz);
}
// Event LIstners are heave whenever you attach the eventlistner it will take a memory
attachEventListner();