// Question.6 :- You are developing a form validation system. Write a program that takes user information(such as name, email, age) and uses the type of operator to check the data type of each input. Print appropriate messages like "Name should be a string", "Email should be a string," or "age should be a number." if any field is not proper.

    // apply function
function validationSystem(name, email, age){
    // Condition apply on name
    if (typeof name !== "string") {
        console.log("Name should be a string");
    }
    // Condition apply on email
    if (typeof email !== "string") {
        console.log("email should be a string");
    }
    // Condition apply on age
    if (typeof age !== "number") {
        console.log("age should be a number");
    }
}

validationSystem("ashu", "ashukaushik1007@gmail.com", "15")
// When you run this code, it will output:
// "age should be a number"