// // callback 

// function call1 (callback){
//     setTimeout(() => {
//         console.log("come fast");
//         callback();
//     }, 3000);
// }
// function call2(callback){
//     setTimeout(() => {
//         console.log("come slow");
    
//     }, 1000);
    
// }
// call1(call2)

// callbackhell    

function well1 (callback){
    setTimeout(() => {
        console.log("come fast");
        callback();
    }, 3000);
}
function well2(callback){
    setTimeout(() => {
        console.log("come slow");
    
    }, 1000);
