// <!-- Question-4 :-  Declare three variables, one using let, one using var, and one using const, all inside a block scope. Assign them values and log their values to the console before and after they are declared to demonstrate variable hoisting.

function scope() {
  console.log(a); // gives error because of pre-declaration
  console.log(b); // gives error because of pre-declaration
  console.log(c); // gives error because of pre-declaration

  let a = 11;
  const b = 22;
  var c = 33;

  console.log(a);
  console.log(b);
  console.log(c);
}

scope();


// When we run this function, we will have the following information printed/output (Error) : >>>

// // ************************************************************************************************//
//                                                                                                    //
// PS E:\tech> node '.\Full-Stack-Web-Development-2.0-SIGMA\05. JavaScript\17th_week_assignment\      //
// 1.Working_of_JavaScript\Question-4.js'                                                             //
// E:\tech\Full-Stack-Web-Development-2.0-SIGMA\05. JavaScript\17th_week_assignment\                  //
// 1.Working_of_JavaScript\Question-4.js:13                                                           //
// console.log(a);                                                                                    //
//             ^                                                                                      //
//                                                                                                    //
// ReferenceError: a is not defined                                                                   //
//     at Object.<anonymous> (E:\tech\Full-Stack-Web-Development-2.0-SIGMA\                           //
//     05. JavaScript\17th_week_assignment\1.Working_of_JavaScript\Question-4.js:13:13)               //
//     at Module._compile (node:internal/modules/cjs/loader:1233:14)                                  //
//     at Module._extensions..js (node:internal/modules/cjs/loader:1287:10)                           //
//     at Module.load (node:internal/modules/cjs/loader:1091:32)                                      //
//     at Module._load (node:internal/modules/cjs/loader:938:12)                                      //
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)          //
//     at node:internal/main/run_main_module:23:47                                                    //
//                                                                                                    //
// // ************************************************************************************************//