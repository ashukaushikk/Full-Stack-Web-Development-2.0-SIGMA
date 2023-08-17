// Question-1 :- // Imagine you are working for a social media company. You have a list of all the users. Your job is to create a function that checks if a specific username is in that list. The function should take the username as input and tell you whether it's present in the list of users or not. 

// Assuming that this list is given by social media company : >>>

function isUserPresent(user, userList) {
    for (let i = 0; i < userList.length; i++) {
        if (userList[i] === user) {
            return `Yes, ${user} is a valid user.`
        }
    }
    return `No, someone is not a valid user.`
}
// Create an Array : >>>
let userList = ["Ashu", "Deepak", "Jatin", "Nikhil", "Mohit"]
// To print the returned value of the function : >>>
console.log(isUserPresent("Jatin", userList));

// When we run this function, we will have the following information printed/output : >>>

// ***********************************
// " Yes, "Jatin" is a valid user. " *
// ***********************************