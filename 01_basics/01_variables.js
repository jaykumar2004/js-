const accountId =144553
let accountEmail="jay@gmail.com"
var accountPassword="12345"
accountCity="Jaipur"
let accountState;

// accountId=2  //not allowed
accountEmail="jkj@gmail.com"
accountPassword="121212"
accountCity="Mount Abu"

console.log(accountId); 

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


/*
Prefer not to use var
because of issue in block scope and functional scope
*/