//High Order Array Loops
// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}

//Maps
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
// console.log(map);

//loop on this map
for (const [key, value] of map) {
    // console.log(key, ':-', value);
    
}

//for of loop in object:
const myObject = {
    'Game 1' : 'NFS',
    'Game 2' : 'Spider Man'
}
// for (const [key,value] of myObject) {
//     console.log(key, ':-', value);
    
// } //It gives error: "myObject is not iterable"