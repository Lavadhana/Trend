// map
// syntax
// variablename.map((value , index, acctualarray)) 

let L = [10,20,30,40,50]
let s = L.map((v,i,a)=>v*5);
console.log(s);


// reduce

let y = [10,20,30,40,50]
let z = y.reduce((v,i,a)=>i*5);
console.log(z);

// filter

let f = [10,20,30,40,50]
let G = f.filter((v,i,a)=>a*5);
console.log(G);