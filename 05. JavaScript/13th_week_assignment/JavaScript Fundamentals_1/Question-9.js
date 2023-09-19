// Question.9 :- You are given an array of numbers and strings. Your task is to find the first string in the array. On finding the first string print “Found the First String” and its value.

const array = [1, 2, 999, 56, `Mithun`, 1234, "PW"];
let foundString = [];
function findFirstString(array) {
  for (let num of array) {
    if (typeof num === `string`) {
      foundString = num;
      // Apply break point for found only first string
      break;
    }
  }
  return `Found the first String ${foundString}`;
}
let result = findFirstString(array);
console.log(result);

// When you run this code, it will output:

// ********************************** //
//                                    //
// " Found the First String Mithun "  //
//                                    //         
// ********************************** //