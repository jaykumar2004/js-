const name = "jay";
const repoCount = 50;
console.log(name + repoCount + "values");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  //new syntax to write string, we use back ticks(``)

//another way to declare the string
const gameName = new String('Jay Kumar')



//to access the keys
console.log(gameName[0]);

//to access the prototype

console.log(gameName.__proto__);

console.log(gameName.length); //to print the length of the string

console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));

console.log(gameName.indexOf('y'));
