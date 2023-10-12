// <!-- Question-3 :-  Write a function "manipulateString" that takes in a string and converts the characters to uppercase letters. The function should return a callback function "logString" that logs the sentence "The manipulated string is: " along with the manipulated string or the new string to the console.
// Write a JavaScript function called ageInDays that accepts an object containing a person's first name, last name, and age in years as input. The function should concatenate the first and last name into a single string and store it in a variable called fullName. It should then calculate the person's age in days and store it in a variable called ageInDays.
// The ageInDays function should then return a callback function that logs a message to the console. The message should include the person's full name and age in days, and should be in the format: "The person's full name is [full name] and their age in days is (age in days]."
// Note that the ageInDays function should not log the message to the console directly, but should instead return a callback function that can be used to log the message at a later time.

// #Age In Days: =>>>

// Main_Function_Run: =>>>
const ageInDays = (personObj, callback) => {
  const fullName = `${personObj.firstName} ${personObj.lastName}`;
  const age = personObj.age * 365;

  return callback(fullName, age);
};

// Callback_Function (2nd function): =>>>
const logMessage = (fullName, age) => {
  return `The Person's full name is "${fullName}" and their age in days is: "${age}"`;
};

// Test_Case: =>>>
const person = { firstName: "Ashwani", lastName: "Kumar", age: "28" };

console.log(ageInDays(person, logMessage));

// When we run this function, we will have the following information printed/output : >>>

// **************************************************************************//
// The person's full name is "Ashwani Kumar" and their age in days is 10220   //
// **************************************************************************//
