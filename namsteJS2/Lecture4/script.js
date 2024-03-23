// /**
//  * what is async?
//  * what is await?
//  * how async await works behind the scenes?
//  * Example of using async / await
//  * Error Handling 
//  * Async await vs Promise.then /catch
//  */

// // Note -: await is the only be   use only in async function for resloving the promise 

// const p1 = new Promise((resolve,reject) =>{
//     setTimeout(()=>{
//         resolve("Promise 10000 is resolved");
//     },10000)
// })
// const p2 = new Promise((resolve,reject) =>{
//     setTimeout(()=>{
//         resolve("Promise 5000 is resolved");
//     },5000)
// })

// // asyncs function always returns a promise 
// async function getData(){
//     // Js engine wait here for resolve promise here using await keyword
//     const val1 = await p2;
//     console.log(val1);
//     const val = await p1;
//     console.log(val);
//     console.log("Response of 1! ")
//     console.log("Response of 2! ")
// }

// getData();

// function getMydata(){
//     // Js engine will not wait for resloving promise it print console immediately
//     p.then((res)=>{
//         console.log(res);
//     })
//     console.log("Harshi Joshi!");
// }
// // getMydata()

// // Async and await combo used to handle the promises

const REPO_URL_API = "https://api.github.com/repos/hasuq33/My-Web-Projects";

async function getGitApiData(){
    try{
        const data = await fetch(REPO_URL_API);
        const joinvalue = await data.json();
    
        console.log(data);
        console.log(joinvalue);
    } catch(err){
        console.log(err)
    }
}

getGitApiData()