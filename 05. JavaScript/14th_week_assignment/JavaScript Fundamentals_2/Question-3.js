// Question-3 :- Imagine you are given a list of student objects, each containing the student's name and their marks. Your task is to create a function that checks results by filtering out students whose score is more than 90 and prints a message saying "Congratulations [Student Name]! You have cleared the exam."

// List to check the result of the students cleared the Exam or not : >>>

function checkResult(user, studentList) {
    // "FOR LOOP" applied for looping on the data of all the students : >>>
    for (let i = 0; i < studentList.length; i++) {

        if (studentList[i].name === user) {
            // "If Condition" applied for those students who have more than 90 marks : >>>
            if (studentList[i].marks > 90) {
                return `Congratulation ${user}! You have cleared the exam`;
                // "Else Condition" applied for those students who have below 90 marks : >>>
            } else {
                return `Sorry ${user}! You haven't cleared the exam`;
            }
        }
    } return `Invalid User!!!`;
} // This "RETURN COMMAND" is for those students whose name does not match with the array data, then Invalid User !! will come : >>>

// Create a Array data : >>>
const studentList = [
    { name: "Mithun", marks: 95 },
    { name: "Prabir", marks: 95 },
    { name: "Alka", marks: 92 },
    { name: "Shivam", marks: 70 },
    { name: "Farman", marks: 99 },
];
// To print the returned value of the function : >>>
console.log(checkResult("Mithun", studentList));

// When we run this function, we will have the following information printed/output : >>>

// *******************************************************
// " Congratulation "Mithun" You have cleared the exam " *
// *******************************************************