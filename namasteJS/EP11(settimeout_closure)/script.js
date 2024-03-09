// function x(){
//     // Here let make each and evry time a new copy that's why you get 1,2,3,...etc answer.
//     // IF you use Var then it will take print 6 beacuse it refers same memory 
//     for(let i = 1; i<=5; i++){
//         setTimeout(function(){
//             console.log(i);
//         },i*1000);
//     }
//     console.log("Namaste Javascript");
// }

function x(){
    for(var i = 1; i<= 5 ; i++){
        function close(i){
            setTimeout(function(){
                console.log(i);
            }, i*1000);
        }

        close(i);
    }
}

x();

