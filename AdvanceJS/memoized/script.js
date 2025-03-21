const initApp = () =>{
    const multiplyBy10 =  cacheMultplicationBy10();

    console.log(multiplyBy10(5));
    console.log(multiplyBy10(5));
    console.log(multiplyBy10(5));
    console.log(multiplyBy10(5));
    console.log(multiplyBy10(5));
    console.log(multiplyBy10(4));
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

document.addEventListener("DOMContentLoaded",initApp);