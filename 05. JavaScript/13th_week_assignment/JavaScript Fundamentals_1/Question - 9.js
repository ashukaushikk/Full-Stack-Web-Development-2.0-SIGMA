// Question.9 :- You are given an array of numbers and strings. Your task is to find the first string in the array. On finding the first string print “Found the First String” and its value.

const array = [1, 2, 999, 56, "Mithun", 1234, "PW"];
    
    // Apply for loop
for (let i=0; i<=array.length - 1; i++) {
    // Apply if condition
    if (typeof array[i] === "string"){
        console.log(`Found the First String ${array[i]}`);
    // Apply break point
    break;
    }
    // end if condition
}

// When you run this code, it will output:

// ***********************************
// " Found the First String Mithun " *          
// ***********************************