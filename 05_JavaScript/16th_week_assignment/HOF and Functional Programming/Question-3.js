// <!-- Question-3 :-  Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should use the map higher-order function to create a new object with the converted prices in Rupees.

// #Build a feature for Store's Inventory: =>>>

const itemsInUSD = [
  { name: "Iphone 15", category: "Mobile", priceUSD: 999 },
  { name: "Macbook Air", category: "Laptops", priceUSD: 1499 },
  { name: "Apple Watch", category: "Watches", priceUSD: 499 },
];

// const convertUSDToINR = (obj, exchangeRate) => {
//   let itemsInINR = [];
//   let object = {};
//   obj.map((item) => {
//     let priceInINR = item.priceUSD * exchangeRate;
//     const newItem = { ...item, priceINR: priceInINR };
//     object[item.name] = priceInINR
//   });

//   return object;
// };

// // Test-Case: =>>>
// console.log(convertUSDToINR(itemsInUSD, 80));

// When we run this function, we will have the following information printed/output : >>>

// { 'Iphone 15': 79920, 'Macbook Air': 119920, 'Apple Watch': 39920 }

const convertUSDToINR = (obj, exchangeRate) => {
  let itemsInINR = [];
  obj.map((item) => {
    let priceInINR = item.priceUSD * exchangeRate;
    const newItem = { ...item, priceINR: priceInINR };
    itemsInINR.push(newItem);
  });

  return itemsInINR;
};

// Test-Case: =>>>
console.log(convertUSDToINR(itemsInUSD, 80));

// When we run this function, we will have the following information printed/output : >>>

// ******************************** //
// [                                //
//   {                              //
//     name: "Iphone 15",           //
//     category: "Mobile",          //
//     priceUSD: 999,               //
//     priceINR: 79920,             //
//   },                             //
//   {                              //
//     name: "Macbook Air",         //
//     category: "Laptops",         //
//     priceUSD: 1499,              //
//     priceINR: 119920,            //
//   },                             //
//   {                              //
//     name: "Apple Watch",         //
//     category: "Watches",         //
//     priceUSD: 499,               //
//     priceINR: 39920,             //
//   },                             //
// ]                                //
// ******************************** //
