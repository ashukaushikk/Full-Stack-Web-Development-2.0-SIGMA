// Question.10 :- You are given with an array of numbers both positive and negative. Your task is to print only the positive numbers.

let array = [1, 2, -3, 5, -9, -8, -7, 7];
function findPositiveNumber(array) {
  let positiveNumber = [];
  let negativeNumber = [];
  for (let num of array) {
    if (num > 0) {
      positiveNumber.push(num);
    } else {
      negativeNumber.push(num);
    }
  }
    return `Positive Number is: ${positiveNumber},  
Negative Number is: ${negativeNumber}`;
}
let result = findPositiveNumber(array);
console.log(result);

// When you run this code, it will output:

// ********************************** //
//                                    //
// Positive Number is: 1,2,5,7,       //
// Negative Number is: -3,-9,-8,-7    //
//                                    //         
// ********************************** //