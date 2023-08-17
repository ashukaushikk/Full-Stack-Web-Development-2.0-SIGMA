// Question.4 :- You are developing a booking application for a cinema. The ticket price depends on the type of the viewer("child", "adult", or "senior"). Write a program which calculates the price accordingly and prints the total price to be paid. Let’s assume the ticket price for a child is Rs. 100, adult ticket price is Rs. 150 and ticket price for a senior is Rs. 120.

// let numberOfChilds = 2;
// let numberOfAdults = 1;
// let numberOfSenior = 1;

// const nameArray=[
//     {numberOfChilds: 2, ticketprice: 100},
//     {numberOfAdults: 1, ticketprice: 150},
//     {numberOfSenior: 1, ticketprice: 120},
// ]

// let totalamount = 0
// for(let i=0;i<nameArray.length;i++){
    
// }


function ticketprice(numberOfChilds, numberOfAdults, numberOfSenior) {
    const total = numberOfChilds * 100 + numberOfAdults * 150 + numberOfSenior * 120;
    
    console.log(`No. Of Childs: ${numberOfChilds}`);
    console.log(`No. Of Adults: ${numberOfAdults}`);
    console.log(`No. Of Senior: ${numberOfSenior}`);

    console.log(`The total ticket price is : ${total}`);
}

ticketprice(2, 1, 1)
// When you run this code, it will output:

// No. Of Childs: 2
// No. Of Adults: 1
// No. Of Senior: 1
// The total ticket price is : 470
