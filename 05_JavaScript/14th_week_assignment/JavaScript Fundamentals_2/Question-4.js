// Question-4 :- // You are working for an e-commerce client, and they provide you with an array of objects containing product names and their prices. Your task is to create a function that finds the product with the maximum amount (the highest price) and the product with the minimum amount (the lowest price) and prints them to the console.

const products = [
  { name: "Laptop", price: 120000 },
  { name: "Mobile", price: 70000 },
  { name: "Laptop Bag", price: 20000 },
  { name: "Watch", price: 20000 },
  { name: "Mobile Charger", price: 1500 },
];

// This function will give us both the amounts (Minimum Amt. & Maximum Amt.) by defining : >>>
function getMinMaxAmount(products) {
  let minValue = minAmount(products);
  let maxValue = maximumAmount(products, minValue);
  return `The product with minimum amount is ${minValue.name} which is priced at Rs. ${minValue.price}, \nThe product with maximum amount is ${maxValue.name} which is priced at Rs. ${maxValue.price}`;
}

// This function will give us the Minimum Amount defined : >>>
function minAmount(products) {
  let minValue = products[0];
  for (let i = 0; i < products.length; i++) {
    if (products[i].price < minValue.price) {
      minValue = products[i];
    }
  }
  return minValue;
}

// This function will give us the Maximum Amount defined : >>>
function maximumAmount(products, minValue) {
  let maxValue = minValue;
  for (let i = 0; i < products.length; i++) {
    if (products[i].price > maxValue.price) {
      maxValue = products[i];
    }
  }
  return maxValue;
}

// I signed the 1st function call in a variable : >>>
let resultMinMaxAmount = getMinMaxAmount(products);

// and printed the function here : >>>
console.log(resultMinMaxAmount);

// When we run this function, we will have the following information printed/output  : >>>

// ************************************************************************************
// " The product with maximum amount is "Laptop" which is priced at Rs. 120000.       "
// " The product with minimum amount is "Mobile Charger" which is priced at Rs. 1500. "
// ************************************************************************************