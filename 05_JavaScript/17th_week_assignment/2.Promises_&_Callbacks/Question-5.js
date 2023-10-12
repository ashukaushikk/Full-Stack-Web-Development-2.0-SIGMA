// <!-- Question-5 :-  You need to write a function that takes a name as input and returns a promise that resolves with a greeting message. The function should greet the person using their name, with a message in the format "Hello, {name}!*.
// For example, if the input to the function is "Mithun*, the promise should resolve with the string "Hello, Mithun!".
// #Greeting Promise: =>>>

// Promise_Function_Run: =>>>
const greetWithPromise = (name) => {
  return new Promise((resolve, reject) => {
    if (typeof name === "string" && name.trim() !== "") {
      let greeting = `Hello ${name}!`;
      resolve(greeting);
    } else {
      reject("Please try again");
    }
  });
};

// Test_Case: =>>>
let result = greetWithPromise("Ashwani Kumar");

result
  .then((result) => {
    console.log(result);
  })

  .catch((err) => {
    console.log(err);
  });

// When we run this function, we will have the following information printed/output : >>>

// *********************** //
// Hello Ashwani Kumar!    //
// *********************** //
