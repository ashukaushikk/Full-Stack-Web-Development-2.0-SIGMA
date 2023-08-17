// Question.1 :- Suppose you are building a payment checkout page and must display the final price after the discount. Create a simple discount calculator that takes two values from the variables - the total cost and the discount percentage - and prints the discounted value.

let finalOutput = discountedValue(2000, 20);
console.log(finalOutput);

function discountedValue(totalValue, discountPercentage){
        // Calculate the discount amount:
        const discountAmount= (discountPercentage / 100) * totalValue;

        // Calculate the discounted value:
        const discountedValue= totalValue - discountAmount;

        console.log("Total Value: $" + totalValue); 
        console.log("Discount Percentage: " + discountPercentage + "%");
        return `The final price after discount is : Rs. ${discountedValue}`;
}

// When you run this code, it will output:

// Total Value: $2000
// Discount Percentage: 20%
// Discounted Value: Rs.1600
// So, after applying a 20% discount, the final price after discount is Rs.1600.