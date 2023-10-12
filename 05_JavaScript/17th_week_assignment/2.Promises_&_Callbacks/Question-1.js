// <!-- Question-1 :-  Write a function that takes in an array of integers and a callback function, and returns a new array where each element is doubled using the callback.
// #Double using callback: =>>>

// Main_Function_Run: =>>>
const doubleCallback = (array, callback) => {
  const newArray = array.map((element) => {
    return callback(element);
  });
  return newArray;
};

// Callback_Function (2nd function): =>>>
const first = (array) => {
  return array * 2;
};

// Test_Case: =>>>
console.log(doubleCallback([2, 4, 6, 8, 10], first));

// When we run this function, we will have the following information printed/output : >>>

// ****************************//
// [ 4, 8, 12, 16, 20 ]        //
// ****************************//
