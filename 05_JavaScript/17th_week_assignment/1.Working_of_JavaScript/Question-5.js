// <!-- Question-5 :-  Declare a variable using let inside a block scope and attempt to log its value to the console before it is assigned a value to demonstrate the temporal dead zone.

function zones() {
  console.log(zone);               // This line caused the error
  let zone = 'dead zone';
  console.log(zone);               // this code through shows the value of the variable
}

zones();

// When we run this function, we will have the following information printed/output (Error) : >>>

// // ************************************************************************************************//
//                                                                                                    //
// PS E:\tech> node '.\Full-Stack-Web-Development-2.0-SIGMA\05. JavaScript\17th_week_assignment\      //
// 1.Working_of_JavaScript\Question-5.js'                                                             //
// E:\tech\Full-Stack-Web-Development-2.0-SIGMA\05. JavaScript\17th_week_assignment\                  //
// 1.Working_of_JavaScript\Question-5.js:4                                                            //
//   console.log(zone); // this lines throws an error                                                 //
//               ^                                                                                    //
//                                                                                                    //
// ReferenceError: Cannot access 'zone' before initialization                                         //
//     at zones (E:\tech\Full-Stack-Web-Development-2.0-SIGMA\05. JavaScript\17th_week_assignment\    //  
//     1.Working_of_JavaScript\Question-5.js:4:15)                                                    //
//     at Object.<anonymous> (E:\tech\Full-Stack-Web-Development-2.0-SIGMA\                           //
//     05. JavaScript\17th_week_assignment\1.Working_of_JavaScript\Question-5.js:9:1)                 //
//     at Module._compile (node:internal/modules/cjs/loader:1233:14)                                  //
//     at Module._extensions..js (node:internal/modules/cjs/loader:1287:10)                           //
//     at Module.load (node:internal/modules/cjs/loader:1091:32)                                      //
//     at Module._load (node:internal/modules/cjs/loader:938:12)                                      //
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)          //
//     at node:internal/main/run_main_module:23:47                                                    //
//                                                                                                    //
// // ************************************************************************************************//
