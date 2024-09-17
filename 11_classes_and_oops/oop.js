//Object literal
const user = {
    username : "jay",
    loginCount : 8,
    signedIn : true,

    getUserDetails : function(){
        // console.log("Got user detail from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());

//constructror function : new
// const promise = new Promise()
// const date = new Date()

function User (username, loginCount, isLoggedIn){
    this.username = username  //(left side)his.username is variable, and username is the value which is passing(right side)
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this //object pass on
}
const userOne = new User("jay", 12, true)
const userTwo = new User("chaiAurCode", 11, false)
console.log(userOne.constructor);
console.log(userTwo);
