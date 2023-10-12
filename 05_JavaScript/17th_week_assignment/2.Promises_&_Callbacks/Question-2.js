// <!-- Question-2 :-  Write a function "manipulateString" that takes in a string and converts the characters to uppercase letters. The function should return a callback function "logString" that logs the sentence "The manipulated string is: " along with the manipulated string or the new string to the console.
// #String Manipulation: =>>>

// Main_Function_Run: =>>>
const manipulateString = (str, callback) => {
  return callback(str.toUpperCase());
};

// Callback_Function (2nd function): =>>>
const logString = (capitalizeStr) => {
  return `The manipulated string is : ${capitalizeStr}`;
};

// Test_Case: =>>>
console.log(manipulateString("ashwani Kumar", logString));

// When we run this function, we will have the following information printed/output : >>>

// ******************************************* //
// The manipulated string is : ASHWANI KUMAR   //
// ******************************************* //
