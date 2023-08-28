// <!-- Question-5 :-  Write a JavaScript program that calculates the area of a circle using the Math object's properties and methods.

const calcCircleArea = (radius) => {
  return Math.PI * Math.pow(radius, 2);
};

// Test-Case : =>>>
let result = calcCircleArea(5);
console.log(result);

// When we run this function, we will have the following information printed/output : >>>

// ***************************//
// 78.53981633974483          //
// ***************************//