const initApp = () =>{
    const result =  memoize(fib);

    console.log(result(20));
    console.log(result(20));
    console.log(result(20));
}

const add3 = (num1, num2, num3) =>{
    return num1 + num2 + num3;
}


// This is decorator Function 
const memoize = (fn) =>{
    const cache = {};

    return (...args) =>{
        if(args.toString() in cache){
            console.log(cache);
            return cache[args.toString()];
        }
        const result = fn(...args);
        cache[args.toString()] = result;
        return result;
    }
}

const addMany = (...args) =>{
    return args.reduce((acc,num) => {
        return acc + num;
    });
}

const fib = (pos) =>{
    if(pos < 2) return pos;
    return fib(pos-1) + fib(pos-2);
}

const multiplyBy10 = (num) => num * 10;
const cacheMultplicationBy10 = () =>{
    const cache = {};
    return (num)=>{
        if(num in cache) return cache[num];

        console.log("Calculating",num ,"for 1 time called for ");
        return cache[num] = num * 10;
    }
}
initApp();
// document.addEventListener("DOMContentLoaded",initApp);