/* this is the best comparisons */
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


/* we avoid this comparisons */
// console.log("2" > 1);  
// console.log("02" > 1);
// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);  



//The reason is that an equality check == and comparisions > < >= <= works differently
//Comparisions convert null to a number, treating it as 0.
//Thats why (3)null >= 0 is true and (1)null > 0 is false

console.log(undefined == 0); //in every case (<,>,<=,>=) it gives false


//====
console.log("2" === 2);