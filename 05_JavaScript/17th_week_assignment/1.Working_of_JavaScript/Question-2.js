// <!-- Question-2 :-  Write a function called "multiplyNumbers" that takes two numbers as arguments and returns their product. Use function expressions to define the function and call the function before it is declared to demonstrate hoisting.

console.log(multiplyNumbers(9, 2));

const multiplyNumbers = function (num1, num2) {
  return num1 * num2;
};

// When we run this function, we will have the following information printed/output (Error) : >>>

// // *********************************************************************************************//
//                                                                                                 //
//  E:\tech\Full-Stack-Web-Development-2.0-SIGMA\05. JavaScript\17th_week_assignment\1.            //   
//  Working_of_JavaScript\Question-2.js:3                                                          //  
//  console.log(multiplyNumbers(9, 2));                                                            //
//             ^                                                                                   //
//                                                                                                 //
//     ReferenceError: Cannot access 'multiplyNumbers' before initialization                       //
//     at Object.<anonymous> (E:\tech\Full-Stack-Web-Development-2.0-SIGMA\                        //
//     05JavaScript\17th_week_assignment\1.Working_of_JavaScript\Question-2.js:3:13)               //
//     at Module._compile (node:internal/modules/cjs/loader:1233:14)                               //
//     at Module._extensions..js (node:internal/modules/cjs/loader:1287:10)                        //
//     at Module.load (node:internal/modules/cjs/loader:1091:32)                                   //
//     at Module._load (node:internal/modules/cjs/loader:938:12)                                   //
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)       //      
//     at node:internal/main/run_main_module:23:47                                                 //
//                                                                                                 //
// // *********************************************************************************************//
