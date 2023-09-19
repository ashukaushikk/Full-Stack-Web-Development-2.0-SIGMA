// Question.6 :- You are developing a form validation system. Write a program that takes user information(such as name, email, age) and uses the type of operator to check the data type of each input. Print appropriate messages like "Name should be a string", "Email should be a string," or "age should be a number." if any field is not proper.

    // apply function
function validationSystem(name, email, age) {
  // Condition apply on name
  if (typeof name !== `string`) {
    return `Name should be a string`;
  }
  // Condition apply on email
  if (typeof email !== `string`) {
    return `Email should be a string`;
  }
  // Condition apply on age
  if (typeof age !== `number`) {
    return `Age should be a number`;
  }
  return `Validate successful`;
}
let result = validationSystem(`Ashwani`, `ashukaushik@gmail.com`, `28`);
console.log(result);

// When you run this code, it will output:

// ******************************* //
//                                 //
// "Age should be a number"        //
//                                 //
// ******************************* //