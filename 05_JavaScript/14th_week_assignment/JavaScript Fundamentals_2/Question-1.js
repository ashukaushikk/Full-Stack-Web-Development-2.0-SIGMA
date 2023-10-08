// Question-1 :- // Imagine you are working for a social media company. You have a list of all the users. Your job is to create a function that checks if a specific username is in that list. The function should take the username as input and tell you whether it's present in the list of users or not.

// Assuming that this list is given by social media company : >>>

// Create an Array : >>>
let userList = ["Ashu", "Deepak", "Jatin", "Nikhil", "Mohit"];

function isUserPresent(user, userList) {
  for (let name of userList) {
    if (name === user) {
      return `Yes, "${user}" is a valid user.`;
    }
  }
  return `No, "${user}" is not a valid user.`;
}
// To print the returned value of the function : >>>
let result = isUserPresent("Jatin", userList);
console.log(result);

// When we run this function, we will have the following information printed/output : >>>

// ***********************************
// " Yes, "Jatin" is a valid user. " *
// ***********************************
