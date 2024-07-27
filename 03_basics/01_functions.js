// function means :Function who cheej hoti haiJo bhi hamane code likha hai 10 line kya aur 5 line Usako package ke andar band ker deta heHope fir ham usko Jahan bhi chayie weha use kar sakte hai, aur uski copies lagey saktey he

// console.log("j");
// console.log("a");
// console.log("y");
//from the above we can easily do the same things in function

function saymyname() {
    console.log("j");
    console.log("a");
    console.log("y");
}

//now calling the function 
// saymyname // this is function reference, no output
saymyname() //this is function execution

//function to add two number

// function addtwoNumber(number1, number2) { //number 1 and 2 are parameters
//     console.log(number1 + number2);
// } 

function addtwoNumber(number1, number2) { //number 1 and 2 are parameters
    // let result = number1 + number2
    // return result

    return number1 + number2
} 

const result = addtwoNumber(3,4) //we give number in the(), {3, 4 is arguments}

// console.log("result", result);

function loginUserMsg(username = "sam"){
    if(!username === undefined){  //! => convert trun into false and false into true
        console.log("please enter the username");
        return
    }

    return `${username} just logged in`
}
// console.log(loginUserMsg("jay"));

function calculateCartPrice(val1, val2,...num1){ //... is rest operator
    return num1
}
console.log(calculateCartPrice(200,400,600,800,1000)); //returns an array


//how to pass an object into an function 
const user = {
    username: "jay kumar",
    price: 199
}

function handleObject (anyobject){
    console.log(`User name is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username : "sam",
    price: 399
})


//to pass an array in functions
const myNewArray = [200,400,100,600];

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,100,600]));


