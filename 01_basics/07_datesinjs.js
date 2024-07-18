//Dates::::
// JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).
let myDate = new Date()
console.log(myDate); //output: 2024-07-17T09:29:03.769Z
console.log(myDate.toString()); //Output: Wed Jul 17 2024 09:29:39 GMT+00(Coordinated Universal Time)
console.log(myDate.toDateString()); // output: Wed Jul 17 2024
console.log(myDate.toISOString()); //output: 2024-07-17T09:32:31.084Z
console.log(myDate.toLocaleString()); //output: 7/17/2024, 9:32:56 AM
console.log(myDate.toJSON); //output: [Function: toJSON]

console.log(typeof(myDate)); //object

// let mycreatedDate = new Date (2024, 0, 17); //months starts from 0
// console.log(mycreatedDate.toDateString()); //Wed Jan 17 2024


// let mycreatedDate = new Date (2024, 0, 17, 5, 3);
// console.log(mycreatedDate.toLocaleString());  //1/17/2024, 5:03:00 AM

//to get the other format:-
let newDate = new Date("2024-07-17")
console.log(newDate.toLocaleString()); // 7/17/2024, 12:00:00 AM //yy-mm-dd

let twoDate = new Date("07-17-2024") //mm-dd-yy
console.log(twoDate.toLocaleString()); //7/17/2024, 12:00:00 AM

let mytimeStamp = Date.now();
console.log(mytimeStamp); //1721209545975

console.log(twoDate.getTime()); //1721174400000 , to get the time in mili seconds

console.log(Math.floor(Date.now()/1000));



let thirdDate = new Date()
console.log(thirdDate.getMonth() + 1);
console.log(thirdDate.getDay());

thirdDate.toLocaleString('default',{
    //press ctr+space
    
})


