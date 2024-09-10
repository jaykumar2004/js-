//reduce method
const myNums = [1,2,3]
// const myTotal = myNums.reduce(function (acc, currValue){
//     console.log(`acc value: ${acc} and curr value: ${currValue}`);
//     return acc + currValue
// }, 0) //we need to give the value of accumulator(for first time)

//using arrow function:
const myTotal = myNums.reduce( (acc,currValue) => acc + currValue, 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
//using reduce method to find total price of all items in the shopping cart
const priceToPay = shoppingCart.reduce( (acc,item) => acc + item.price,0 )
console.log(priceToPay);
