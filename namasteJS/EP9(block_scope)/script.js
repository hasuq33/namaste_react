
let foram = "Harshiv I like you";
var harshiv = 100;
let a = 10;
var b =10;
{
    // var a = 100; //Illegal shadowing
    let b = "Foram"; //legal shadowing
    let foram = "I love you Harshiv.";
    var hasrhiv = "I care a lot about you Foram.";
    const mahadev = "You both of you should Marry.";
    // Here we shadow the variable and also remember we can not shadow differnt data type variable and it's also called illegal shadowing
    console.log(foram);
    console.log(harshiv);
    console.log(mahadev);
}

console.log(foram);
console.log(harshiv);