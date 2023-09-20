// Question-7 :- Imagine you are working for a digital banking platform, and your team is tasked with improving the security of customer accounts. Your challenge is to create a function that generates a random 4-digit OTP (One-Time Password) for authentication purposes.

// Function for OTP generation : >>>


function OneTimePassword() {
    let OTP = ``;
    for (let i = 0; i < 4; i++) {
        OTP += Math.floor(Math.random() * 10);
    }
    return `Here is your OTP(One-time-password): ${OTP}`
}

let OTP = OneTimePassword()

console.log(OTP);

// When we run this function, we will have the following information printed/output  : >>>

// ************************************************ //
//                                                  //
// Here is your OTP(One-time-password): _________   //
//                                                  //
// ************************************************ //

