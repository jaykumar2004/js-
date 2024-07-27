//objects can be declared by literals and constructors
//singleton
// Object.create //constructor method
//object literals

const mySym = Symbol("key1")



const jsuser = {
    name : "jay",
    "full name" : "Jay Kumar",
    [mySym] : "mykey1",  //correct way to access the symbol
    age : 20,
    location: "Jaipur",
    email : "jay@google.com",
    isLoggedIn : false,
    LastLoginDays : ["Monday", "Saturday"]
}; //this is an object

console.log(jsuser.email); //to access the object
console.log(jsuser["email"]); //to access the object,right method
console.log(jsuser["full name"]); //right method
console.log(jsuser[mySym]);

//to changes things in objects

jsuser.email = "jay@chatgpt.com";
