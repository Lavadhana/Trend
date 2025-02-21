// for loop    
// syntax 
// for(initialization; CSSConditionRule; increment or decrement)

const { LookoutEquipment } = require("aws-sdk");

for(let a= 1; a<=10; a++){
    console.log("gajendran");

}

// while Loop 

// initialization
// (condition)
// coderun
// ++/--

let b = 1; 
while (b<=5){
    console.log("java");
    b++
}

let c=5;
do{
    console.log("js");
    c--
}while(c>=1);

// for of 

let fruit = ["apple","banana","orange","grape" ]
for (sap of fruit){
    console.log(sap);
}


// for in 

let obj = {
    name:"lavanya",
    place : "Chennai",
    age : 40,

}
for (imp in obj){
    console.log(imp+";"+obj[imp]);
}