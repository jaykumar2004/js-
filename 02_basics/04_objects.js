// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    courseName : "js in hindi",
    price : "999",
    courseInstructor : "Jay"
}

// console.log(course.courseInstructor); // suppose we want to print this many times so wo thoda sa ajib ho jata he. So iska yeak aur syntax he:

const {courseInstructor:instructor} =course;
// console.log(courseInstructor);
console.log(instructor);


// API: jab bhi hamey apna kam kisi aur ke sar pe dal dena he to usey he ham api kahatey he

//in API the values are comes in JASON

//structure if JASON => {
//    }

//in the below the value keys and values are both string
//this is the sample
// {
//     "name":"jay",
//     "coursename": "js in hindi",
//     "price": "free"
// }

//API can also be the form of array
//below is the array example
[
    {},
    {},
    {}
]

//tools to understand api => json formatter
