const userEmail = "j@ykumar.ai";
if(userEmail){
    console.log("got user email");
}
else{
    console.log(console.log("don't have user email"));
    
}

//falsy value:
// false, 0, -0, BigInt 0n, "", null, undefined, Nan

//truthy valuse:
//"0", 'false', " ", [], {}, function (){}


//to check the array:
// if(userEmail.length === 0){
//     console.log("array is empty");
// }

//to check the objects:
const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("object is empty");
}


// Nullish Coalescing Operator (??): null undefined
let val1;
//  val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1);

//Terniary Operator:
// condition ? true : false
const iceTeaPrice = 100;
iceTeaPrice <=80 ? console.log("Less than 80") : console.log("more than  80");


