function throttle (fn, delay){
    // Created a tracking flag here
    let isThr = false;

    return function(...args){
        if(!isThr){
            fn.apply(this, args);
            isThr = true;

            setTimeout(()=>{
                isThr= false;
            },delay);
        }
    }
}

const throttle1 = (fn, delay) =>{
    let t =0; 
    return (...args) =>{
        let now = Date.now();
        if(now - t >= delay){
            fn.apply(this, args);
            t=now; // Adding the Time Delay without using setTineout 
        }
    }
}

// window.addEventListener("resize",throttle(()=>{
//     console.log("resize event is called!");
// },1000));

window.addEventListener("resize",throttle1(()=>{
    console.log("resize event is called!");
},1000));