//for each loop
const coding = ["js", "ruby", "java", "python", "cpp"]
// coding.forEach( function (val) { //this is a call back function so we don't wrtie the name
//     console.log(val); 
// } )

coding.forEach( (item) => {
    // console.log(item);
    
} )


// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe) //we want to give only reference


coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
} )

const myCoding = [
    {
        languageName : "javascript",
        languageFile : "JS"
    },
    {
        languageName : "java",
        languageFile : "JAVA"
    },
    {
        languageName : "Python",
        languageFile : "Py"
    },
]
myCoding.forEach( (item) => {
    console.log(item.languageName);
    
} )
