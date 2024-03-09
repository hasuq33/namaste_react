const arr = [5,1,2,3,6];

// Double
function double(x){
    return x*2;
}
// Binary
function Binary(x){
    return x.toString(2);
}
const output = arr.map(Binary);
// Short method to write a map function 

const output1 = arr.map((x) => x*2);

// Use Filter Method for filter the value of Array
function isEven(x){
    return x%2 ===0;
}

const foutput = arr.filter(isEven);

// Reduce 
// Reduce takes an array and come up with the single value

function findSum(arr){
    let sum = 0;
    for(let i=0; i < arr.length; i++){
        sum =  sum+arr[i];
    }

    return sum;
}

// console.log(findSum(arr));

const routput = arr.reduce((acc,current)=> acc = acc + current);//Here acc means initialize the value which keep track the record of incremented value in array and current take the value from the array

// console.log(routput);

function findMax(arr){
    let max = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

console.log(findMax(arr));

const maxNumber = arr.reduce((acc,current) => {
    if(current > acc){
         acc = current;
    }
    return acc;
},0)
console .log(maxNumber);