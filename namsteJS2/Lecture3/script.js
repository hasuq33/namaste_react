const cart = ["shoes","pants","kurtas"];

createOrder(cart).then(function(orderId){
    console.log(orderId);
    // proceedToPayment(orderId);
    return orderId; //if you are chaining you should return promies or somethinf for getting value in next promise 
})
.then(function(orderId){
    return proceedToPayment(orderId);
})
.then(function(paymentInfo){
    console.log(paymentInfo);
})
.catch((err)=>{
    console.log(err.message); //Here we gracefully reject the promise 
})
.then(function(){
    console.log("whatever happaned I will called!");
})

// producer 
function createOrder(cart){
    const pr = new Promise(function(resolve, reject){
        // createOrder
        // validateCart
        // orderId
        if(!validateCart(cart)){
            const err = new Error("Cart is not valid!");
            reject(err);
        }
        // logic for createorder
        const orderId  = "12344";
        if(orderId){
            setTimeout(function(){
                resolve(orderId);
            },1000);
        }
    })

    return pr;
}

function validateCart(cart){
    return false;
}

function proceedToPayment(orderId){
    return new Promise(function(resolve,reject){
        resolve("Payment Successfull");
    })
}