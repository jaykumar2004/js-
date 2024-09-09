// Immediately Invoked Function Expressions (IIFE)
(function chai(){
    //names IIFE
    console.log('DB CONNECTED');
}) ();
// chai();

//()() in this we write the function definition, and in the second this is the execution



//we can also write it from arrow function
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('jay')

