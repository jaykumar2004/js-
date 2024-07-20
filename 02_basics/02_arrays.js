const marvalHeros = ["thor", "Ironman", "SpiderMan"];
const DcHeros = ["SuperMan", "Flash", "BatMan"];

// marvalHeros.push(DcHeros);
// console.log(marvalHeros); //[ 'thor', 'Ironman', 'SpiderMan', [ 'SuperMan', 'Flash', 'BatMan' ] ]

// console.log(marvalHeros[3][1]); //flash
// //this is not the good method to access the elements




//*****************concate********************* */
// const allHeros = marvalHeros.concat(DcHeros); //concate => Combines two or more arrays. This method returns a new array without modifying any existing arrays.
// console.log(allHeros); //[ 'thor', 'Ironman', 'SpiderMan', 'SuperMan', 'Flash', 'BatMan' ]



//*************************spread******************* */
//we use "..." to use spread

const all_new_heros = [... marvalHeros, ...DcHeros];
console.log(all_new_heros); //[ 'thor', 'Ironman', 'SpiderMan', 'SuperMan', 'Flash', 'BatMan' ]

const another_array = [1, 2 , 3 , [4,5,6], 7, [6,7, [4,5]]];

const real_another_array = another_array.flat(Infinity); 
//flat=>  Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(real_another_array);
//[
//     1, 2, 3, 4, 5,
//     6, 7, 6, 7, 4,
//     5
//   ]

console.log(Array.isArray("Jay"));
console.log(Array.from("Jay")); //convert into an array
console.log(Array.from({name: "jaykumar"})); //empty array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));  //of() => Returns a new array from a set of elements.

