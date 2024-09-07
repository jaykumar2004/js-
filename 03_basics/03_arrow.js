const user = {
    username : "jay",
    price : 999,

    welcomeMessage: function (){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this); //empty object


// function chai(){
//     let username = "Jay kumar"
//     console.log(this.username); //undefined
// }
// chai()


// const chai = function(){
//     let username = "Jay kumar"
//     console.log(this.username); //undefined
// }



const chai = () => {  //arrow function

    let username = "Jay kumar"
    console.log(this.username); //undefined
    console.log(this); //empty
    }

// chai()

// const addTwo = (num1 , num2) => { //basic arrow function
//     return num1 + num2
// }
// console.log(addTwo(3,4));



//we can also write arrow fun as implicit return (implicit means "mea man leta hu")
// const addTwo = (num1 , num2) =>  num1 + num2
// console.log(addTwo(3,4));

// const addTwo = (num1 , num2) =>  (num1 + num2) //another way
// console.log(addTwo(3,4));
// const addTwo = (num1 , num2) =>  {username: "jaykumar"} //undefined, because in this way we cannot return the object 

const addTwo = (num1 , num2) =>  ({username: "jaykumar"}) //so we want to add ()




//they are the concepts of loop
// const myArray = [2,5,3,7,8];
// // myArray.forEach(function() {})//correct function
// myArray.forEach(() => {}) //another way