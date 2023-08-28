// <!-- Question-3 :-  Write a program that takes an object as input and returns the number of properties it has.

const JavaScriptProgrammer = {
  Name: 'Brendan Eich',
  Born: `July 4, 1961`,
  Place: `Pittsburgh, Pennsylvania`,
  Created: `JavaScript programming language`,
  Co_Founded: `Mozilla Project`,
  Website: `Brendaneich.com`,
  Nationality: 'American',
};

// Function to count properties in an object : =>>>
const countProps = (obj) => {
  return `There are total ${Object.keys(obj).length} properties`;
};

// Test-Case : =>>>
let result = countProps(JavaScriptProgrammer);
console.log(result);

// When we run this function, we will have the following information printed/output : >>>

// *******************************//
// There are total 7 properties   //
// *******************************//