// Question.3 :- You are working on a currency conversion application. Write a program that has variable which stores the amount in Indian Rupees (INR) and prints the equivalent amount in US Dollars (USD). Use the current exchange rate of 1 USD = 82 INR.


function convertToUSD$(INR){
    const USD = INR/82;
    return (`${INR} INR is ${USD} USD`);
}
let result = convertToUSD$(850);
console.log(result);

// When you run this code, it will output:

// **************************************** //
//                                          //
// "850 INR is 10.365853658536585 USD"      //
//                                          //
// **************************************** //