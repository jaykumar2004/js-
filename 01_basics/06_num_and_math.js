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

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-In')); // output is 1,000,000
//when we add (en-In) it gives the indian format

//+++++++++++++++++++++maths++++++++++++++++++++++++//

console.log(Math); //Object [Math] {}
console.log(Math.abs(-4)); // 4  - neg chang positive but + dont change
console.log(Math.round(4.3)); //4 round of
console.log(Math.ceil(4.2)); //choose top number , give output 5
console.log(Math.floor(4.2)); //choose lower value, gives output 4

console.log(Math.min(1,2,3,4)); //give minimum value from array
console.log(Math.max(1,2,3,4)); //gives maxmimum value from array

console.log(Math.random()); //give value between 0 and 1
console.log(Math.random()*10); // shift values between 0 and 10 
console.log((Math.random()*10) + 1); // to avoid zero we use +1
//we can also use =>console.log(Math.floor(Math.random()*10) + 1);
//to get only a number not in deciaml form

const min=10;
const max=20;
console.log(Math.floor(Math.random() * (max - min + 1))+ min); //only gets integer values 
//max-min => for range
// +1 => 0 case avoid
//to get the minimum we use + min
