let count = 0;

const getData = ()=>{
    console.log('getData',count++);
}

const debounce = function (fn , delay) {
    let timer ;
    const context = this;
    let args = arguments;
    return function(...args){
        clearTimeout(timer);
       timer = setTimeout(()=>{
            fn.apply(context,args);
        },delay);
    }
}

const debounceingFunction = debounce(getData,500);