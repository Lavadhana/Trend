// function
// syntax
// function name

const { Types } = require("aws-sdk/clients/acm");


function a(){
console.log ("js");
console.log("number");
console.log("java script");
}
a();


// Function Types

// 4 types 

// Function stmt and declaration

// parameter and arguments

function fun(js){
    console.log(js);
}
fun("javascript");
 
// function expression and anonymous function

let exp = function o(f){
    console.log(f);
}
exp(1000);

// anonmymous function

let ano =function (fu) {
    console.log(fu);
} 
ano(10);

// Immediate Invoke function expression -- > iife 

(function(iife){
    console.log(iife)
})
("immd")

// arrow function
// syntax
// ()=>{}


 let arrow=(cut)=>{console.log(cut)}
 arrow("arrow function")    