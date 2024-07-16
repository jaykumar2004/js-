const name = "jay";
const repoCount = 50;
console.log(name + repoCount + "values");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  //new syntax to write string, we use back ticks(``)

//another way to declare the string
const gameName = new String('Jay-Kumar')



//to access the keys
console.log(gameName[0]);

//to access the prototype

console.log(gameName.__proto__);

console.log(gameName.length); //to print the length of the string

console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));

console.log(gameName.indexOf('y'));

const newString = gameName.substring(0, 4); //negative values do not accept here
console.log(newString);

const anotherString =  gameName.slice(-8, 4) //in this we can also give negative values, which starts from zero

console.log(anotherString);

//trim and replace method
const newStringOne = "   jay kumar   ";
console.log(newStringOne);        // without trim method  
console.log(newString.trim());    //trim method => this method removes the space form the string
//trim only works on white space character and line terminators

//*******replace********** */
const url = "http://jay.com/jay%20kumar" //apna browser spaces nhi samaghata he so we use replce method

console.log(url.replace('%20', '-')); //"http://jay.com/jay-kumar" =>gives this output

//we can also asks
console.log(url.includes('jay'));  //it give true
console.log(gameName.split('-')); //split the string on the bases of dash