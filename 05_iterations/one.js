//for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        // console.log("5 is the best number");
        
    }
    // console.log(element);

}
// console.log(element); //do not give any output


for(let i = 1;i <= 10; i++){
    // console.log(`outer loop ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop values ${j} and  inner loop ${i}`);
        // console.log(i + '*' + j + '=' + i*j);
        
    }

}

let myArray = ["flash", "batman", "superman"];
// console.log(myArray.length);

for (let i=0; i<myArray.length;i++){
    const element = myArray[i];
    // console.log(element);
    
}


//break and continue keyword
//break:
// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5 `);
//         break       
//     }
//     console.log(`Value of i is ${index}`);  
// }

//continue:
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5 `);
        continue;       
    }
    console.log(`Value of i is ${index}`);  
}
