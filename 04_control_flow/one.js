//if

// if(true){   //in (), we want to write the condition
// }
// if(2 != 3){
//     console.log("executed");
    
// }


//if-else
// const isUserLoggedIn = true;
// const temerature = 41;
// if(temerature === 41){
//     console.log("less than 50");
// }
// else{
//     console.log("greater than 50");
// }
// console.log("execute");



// const score = 200;
// if(score > 100){
//     const power = "fly"
//     console.log(`user power ${power}`);
// }
// console.log(`user power ${power}`); //power is not defined


// const balance = 1000
// if(balance > 500) console.log("test");

// if(balance < 500){
//     console.log("less than 500")
// }
// else if(balance < 750){
//     console.log("less than 750");
// }
// else if(balance < 900){
//     console.log("less than 900");   
// }
// else{
//     console.log("less than 1200");
// }


const isUserLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;
if(isUserLoggedIn && debitCard && 2==3){
    console.log("allowed to buy course");
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in");
    
}