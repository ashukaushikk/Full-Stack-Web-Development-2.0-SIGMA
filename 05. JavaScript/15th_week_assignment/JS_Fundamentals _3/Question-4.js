// <!-- Question-4 :-  Develop a program that accepts an object and a property name, and checks if the object has the specified property.

const JavaScriptProgrammer = {
  Name: 'Brendan Eich',
  Born: `July 4, 1961`,
  Place: `Pittsburgh, Pennsylvania`,
  Created: `JavaScript programming language`,
  Co_Founded: `Mozilla Project`,
  Website: `Brendaneich.com`,
  Nationality: 'American',
};

// Function to check prop availability : =>>>
const checkAvailability = (obj, property) => {
  if (obj.hasOwnProperty(property)) {
    console.log(`Yes, this property is available`);
  } else {
    console.log(`No, this property is not available`);
  }
};

// Test-Case : =>>>
checkAvailability(JavaScriptProgrammer, 'Name');
checkAvailability(JavaScriptProgrammer, 'gender');

// When we run this function, we will have the following information printed/output : >>>

// **************************************//
// Yes, this property is available       //
// No, this property is not available    //
// **************************************//