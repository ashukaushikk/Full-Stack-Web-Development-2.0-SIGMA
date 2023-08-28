// <!-- Question-2 :-  The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a variable so can be modified. The program displays a message every second indicating the time remaining until the random number is generated and then outputs the generated number.

// #Random Number Generator with Delay and Progress Indication: =>>>

const generateNumDelay = () => {
  let delay = 3;
  let number = undefined;
  console.log(`${delay} seconds left`);

  setTimeout(() => {
    number = Math.floor(Math.random() * (100 - 0) + 0);
  }, delay * 1000);

  let checkAndShow = setInterval(() => {
    if (number === undefined) {
      delay--;
      console.log(`${delay} seconds left`);
    } else {
      clearInterval(checkAndShow);
      console.log(number);
    }
  }, 1000);
};

// Test-Case: =>>>
generateNumDelay();

// When we run this function, we will have the following information printed/output : >>>

// *******************//
// 3 seconds left     //
// 2 seconds left     //
// 1 seconds left     //
// $random_number     // 
// *******************//