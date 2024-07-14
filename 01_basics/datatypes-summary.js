// Primitive Data Types 
//7 types: String, Number, Boolean, Null, undefined, Symbol, Big Int


//Reference Type (Non premitive):
//Arrays, Objects, Functions


// JavaScript is a dynamically typed language.

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;


//to declare the symbols
const id = Symbol('123');
const anotherId =Symbol('123')
console.log(id === anotherId);



// to declare bigInt
const bigNumber = 87364879354980787n

// to declare Array, Objects, Functions

const heros = ["shaktiman", "najraj", "doga"] //arrays

let myObj = {           //objects
    name: "jay",
    age: 20
}

const myFun = function () {   //functions
    console.log("hello jay");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof scoreValue);
console.log(typeof myFun);
console.log(typeof anotherId);


//Documentation-----
// https://262.ecma-international.org/5.1/#sec-11.4.3