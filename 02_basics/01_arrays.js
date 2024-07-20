//javascript arrays are zero indexed
//in Javascript when we are performing the the array-copy-operation it creates the shallow-copies
//A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made.
//A deep copy of an object is a copy whose properties do not share the same references

//*********how to declare an array******************** */
const myArr = [0,1,2,3,4,5];
console.log(myArr[2]);

const heros = ["shaktiman", "naagraj"];

const myArr2 = new Array(1,2,3,4,5);

// Arrays methods

// myArr.push(6) //add values in array
// myArr.push(7)

// myArr.pop() //pop the last element of array


// myArr.unshift(9);         //The unshift() method of Array instances adds the specified elements to the beginning of an array and returns the new length of the array.
//  myArr.shift(); // removes the element from the beginning.

// console.log(myArr.includes(9)); //checks wether the 9 is present in the array, if yes then it prints true, if false than it prints false

// console.log(myArr.indexOf(9)); //checks the index value of the array (if index is not present then it will return "-1")

const newArr = myArr.join();

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr); //typeof is string

//slice , splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);  //slice return section of array, last wala not include
console.log(myn1);

console.log("B ", myArr);


const myn2 = myArr.splice(1, 3);  // last  include
console.log("C ", myArr); // C [ 0, 4, 5 ] orginal  array change
console.log(myn2); // [ 1, 2, 3 ]
