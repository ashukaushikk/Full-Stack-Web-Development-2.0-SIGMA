// Question-2 :- // Imagine you work for an e-commerce company. Your task is to create a function that takes the prices of all the products in a customer's cart as input parameters. The function should then calculate and return the total sum of all the product prices. This will help the company easily calculate the total cost of the customer's shopping cart.

// Function - Calculates sum of Cart value : >>>

function calculateTotalCartValue(a, b, c) {
    const total = a + b + c;
    return `The total cart value is Rs. ${total}`;
}
// To print the returned value of the function : >>>
let result = calculateTotalCartValue(125, 20, 30); 
console.log(result);

// When we run this function, we will have the following information printed/output : >>>

// ******************************** //
//                                  //
// "The total cart value is 175."   //
//                                  //
// ******************************** //