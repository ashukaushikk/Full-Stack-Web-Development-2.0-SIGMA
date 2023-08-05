// Question.5 :- You are building a shipping application. Write a program that takes the type of package ("standard","express", or "overnight") and uses a switch statement to calculate and print the estimated delivery time based on the package type. For example, "standard" might take 3-5 days, "express" 1-2 days, and "overnight" would be delivered the next day.

function deliverTime (Packagetype){
    switch (Packagetype){
        // if_First-Case
        case "Standrad":
            console.log("Delivery time based on the package might take 3-5 days");
        break;
        // if_Second-Case
        case "Express":
            console.log("Delivery time based on the package might take 1-2 days");
        break;
        // if_Third-Case
        case "Overnight":
            console.log("Delivery time based on the package might take next days");
        break;
        default:
            cosole.log("Please enter valid packagetype");
    }
}

deliverTime("Standrad")
// When you run this code, it will output:
// "Delivery time based on the package might take 3-5 days"