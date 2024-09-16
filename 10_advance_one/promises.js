//creating a promise
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function (){
        console.log('Async Task is complete');
        resolve()
    },1000)
});

//consuming an promise:
promiseOne.then(function(){
    console.log("Promise Consumed");
}); //resolve  


//OR
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task two");
        resolve()
    },1000)
}).then(function(){
    console.log("Async Two Resolved");
})



const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username : "Jay Kumar",
            email : "example@gmail.com"
        })
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
    
})


//reject
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "jaykumar", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The Promise is either resolved or rejected")
)



//using async / await
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "JavaScript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

async function consumePromiseFive (){
    try {
        const response = await promiseFive
    console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}
consumePromiseFive()

//using try and catch:
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json() //because it takes time so we want to use await
//         console.log(response);
//     } catch (error) {
//         console.log("E: ", error);    
//     }
// }
// getAllUsers()



//using .then and .catch
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => console.log(data))
.catch((error) => console.log(error))