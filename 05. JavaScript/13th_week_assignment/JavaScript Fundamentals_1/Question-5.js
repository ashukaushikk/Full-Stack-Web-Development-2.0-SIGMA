// Question.5 :- You are building a shipping application. Write a program that takes the type of package ("standard","express", or "overnight") and uses a switch statement to calculate and print the estimated delivery time based on the package type. For example, "standard" might take 3-5 days, "express" 1-2 days, and "overnight" would be delivered the next day.

function deliverTime(Packagetype) {
  switch (Packagetype) {
    // if_First-Case
    case `Standard`:
      return `Delivery time based on the package might take 3-5 days`;
      break;
    // if_Second-Case
    case `Express`:
      return `Delivery time based on the package might take 1-2 days`;
      break;
    // if_Third-Case
    case `Overnight`:
      return `Delivery time based on the package might take next days`;
      break;
    // if_default-Case
    default:
      return `Please enter valid packagetype`;
  }
}
let result = deliverTime(`Standard`);
console.log(result);

// When you run this code, it will output:

// ********************************************************** //
//                                                            //
// "Delivery time based on the package might take 3-5 days"   //
//                                                            //
// ********************************************************** //