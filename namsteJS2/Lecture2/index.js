const cart = ["shoes","pants","kurtas"];


// This is the bad way not looking vertical callback function which looks ugly not using promise 
createOrder(cart, function(orderId){
    proceedToPayment(orderId, function(paymentInfp){
        showOrderSummary(paymentInfp,function(){
            updateWalletBalance();
        })
    })
})

// This line of code using promise 
createOrder(cart)
.then((orderId) => proceedToPayment(orderId))
.then((paymentInfp) => showOrderSummary(paymentInfp))
.then((paymentInfp) => updateWalletBalance());