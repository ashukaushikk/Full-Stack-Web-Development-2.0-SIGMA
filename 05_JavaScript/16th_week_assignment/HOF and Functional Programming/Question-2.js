// <!-- Question-2 :-  The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a variable so can be modified. The program displays a message every second indicating the time remaining until the random number is generated and then outputs the generated number.

// #Random Number Generator with Delay and Progress Indication: =>>>

// This function is responsible for generating a random integer between 0 (inclusive) and 99 (exclusive).
function generateRandomNumber() {
  return Math.floor(Math.random() * 100);
}

// This function takes one argument, delayInSeconds, which specifies the delay (in seconds) before generating a random number.
function generateRandomNumberWithDelay(delayInSeconds) {
  console.log(`Generating a random number after a delay of ${delayInSeconds} seconds...`);

  let countdown = delayInSeconds;

  const countdownInterval = setInterval(() => {
    console.log(`${countdown} seconds remaining...`);
    countdown--;

    if (countdown === 0) {
      clearInterval(countdownInterval);
      const randomNumber = generateRandomNumber();
      console.log(`Random number generated: ${randomNumber}`);
    }
  }, 1000);
}

// Test-Case: =>>>
generateRandomNumberWithDelay(3);


// When we run this function, we will have the following information printed/output : >>>

// ********************************************************** //
// Generating a random number after a delay of 3 seconds...   //
// 3 seconds left                                             //
// 2 seconds left                                             //
// 1 seconds left                                             //
// $random_number                                             //
// ********************************************************** //


