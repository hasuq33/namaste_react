const GITHUB_API = "https://api.github.com/users/hasuq33";

const users = fetch(GITHUB_API);

users.then((data)=>{
    console.log(data)
});

// Promise Defination - A promise is an object representing  the eventual completation or failure of asynchronous operation
  