const users = [
    {firstName: "Harshiv", lastName: "Joshi", age:23},
    {firstName: "Foram", lastName: "Chavda", age:24},
    {firstName: "Harsha", lastName: "Joshi", age:48},
    {firstName: "Joy", lastName: "Patel", age:23},
]

const output1123 = users.map(x=>{
    return x.firstName +" "+ x.lastName;
})

console.log(output1123);

const check_age_value = users.reduce(function(acc,curr){
    if(acc[curr.age]){
        acc[curr.age] +=1;
    }else{
        acc[curr.age] = 1;
    }
    return acc;
},{})

// console.log(check_age_value);
// take the name and func

const desired_output = users.filter((x)=> x.age < 30).map((x) => x.firstName);
console.log(desired_output);

const desired_output1 = users.reduce((acc,curr)=>{
    if(curr.age < 30){
        acc.push(curr.firstName);
    }
    return acc;
},[]);

console.log(desired_output1);