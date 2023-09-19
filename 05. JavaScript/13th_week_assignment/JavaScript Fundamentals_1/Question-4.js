// Question.4 :- You are developing a booking application for a cinema. The ticket price depends on the type of the viewer("child", "adult", or "senior"). Write a program which calculates the price accordingly and prints the total price to be paid. Let’s assume the ticket price for a child is Rs. 100, adult ticket price is Rs. 150 and ticket price for a senior is Rs. 120.

function ticketPrice(numberOfChilds, numberOfAdults, numberOfSenior) {
  const total = numberOfChilds * 100 + numberOfAdults * 150 + numberOfSenior * 120;
  return `Number of Childs: ${numberOfChilds}
Number of Adults: ${numberOfAdults} 
Number of Senior: ${numberOfSenior}
The total ticket price is: ${total}`;
}
let result = ticketPrice(2, 1, 1);
console.log(result);

// When you run this code, it will output:

// **************************************** //
//                                          //
// No. Of Childs: 2                         //
// No. Of Adults: 1                         //
// No. Of Senior: 1                         //
// The total ticket price is : 470          //
//                                          //
// **************************************** //
