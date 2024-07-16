// Note =>Some times we have to explicitly define that the data have a certain type 
const number = 400;
console.log(number);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length); 
console.log(balance.toFixed(2));  //give an output of 100.00

const otherNumber = 24.34343

console.log(otherNumber.toPrecision(3));
//if the number is 124.987 so the precision value comes 125
const otherOneNumber = 124.987;
console.log(otherOneNumber.toPrecision(3));