//yea khani start hoti he let,var and const se
// var c = 300;

let a=300;
if(true){
    let a = 10;
    const b = 20;
    // console.log("Inner: ", a);
    
    // var c = 30;
}  //this is a block scope and outside this loop is global scope

// console.log(a);
// console.log(b);
// console.log(c);

//nested scopes:
function one(){
    const username = "Jay kumar";

    function two(){
        const website = "youtube"; //error in this because "yea website ko keha access ker rehe ho, yea website to andar tha, iska scope to andar he khartam ho geya"
        // console.log(username);
    }
    // console.log(website);
    
    two();
}
one();


if (true) {
    const username = "jay";

    if (username === "Jay") {
        const website = " youtube";
        // console.log(username+website);
    }
    // console.log(website); //error in this 
    
}
// console.log(username); //error in this code


//++++++++++++++++++++++++++++++interesting+++++++++++++++++++++++++++++++++++++++++++//
console.log(addone(5)); //it simply give the output
function addone(num) {  //this is a function
    return num + 1;
}
// addone(5);



addtwo(5); //this will give error => "Cannot access 'addtwo' before initialization" this is called hoisting
const addtwo = function(num) { //this is also a function but sometimes we can say it is a expression
    return num + 2;
}
// addtwo(5);