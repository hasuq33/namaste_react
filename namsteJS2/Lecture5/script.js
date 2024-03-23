// There are three promise Api
// (1) Promise.all([]) //if one them promsie fail then whole execution will fail
// (2)Promise.allSettled([]) //
// (3) Promise.race([]) //whatever promise first settled it will return the promise value 
// (4) Promise.any([]) //It wait for success and ignore the failure and if the list of promise get all fail then it will get aggregate err

const p1 = new Promise((resolve,reject) =>{
    setTimeout(()=> reject("P1 Success"),6000)
});
const p2 = new Promise((resolve,reject) =>{
    setTimeout(()=> reject("P2 Success"),3000)
});
const p3 = new Promise((resolve,reject) =>{
    setTimeout(()=> reject("P3 Success"),2000)
});

// Promise.all([p1,p2,p3]).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.error(err);
// })

// This will waited for all results  - This is the safest way among all 
// Promise.allSettled([p1,p2,p3]).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.error(err);
// })

// Promise.any looking first settled(use this word in inteview ) promsie 
// Promise.race([p1,p2,p3]).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.error(err);
// })


Promise.any([p1,p2,p3]).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.error(err.errors);
})