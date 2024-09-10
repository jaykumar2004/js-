//loops on object 
//for in loop
const myObject = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    swift : 'swift by app'
}
for (const key in myObject) {
    // console.log(myObject[key]);
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

//for in loop for array:
const programming = ['js', 'ruby', 'python', 'java', 'cpp']
for (const key in programming) {
    // console.log(key);
    // console.log(programming[key]);
}


//for in loop in maps
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('FR', "France")
// for (const key in map) {
//     console.log(key); 
// }
//no output beacuse map is not iteratable


