// <!-- Question-3 :-  Write a function that takes two numbers as arguments and returns their sum. Declare a variable inside the function using the var keyword and log its value to the console before it is assigned a value to demonstrate variable hoisting.

const sum = (num1, num2) => {
  var sum;
  // Gives undefined, because sum variable is now empty
  console.log(sum);
  sum = num1 + num2;
  // Gives sum of both numbers
  return `Sum of numbers is = ${sum}`;
};

console.log(sum(55, 45));

// When we run this function, we will have the following information printed/output : >>>

// ***************************//
// undefined                  //
// Sum of numbers is = 100    //
// ***************************//