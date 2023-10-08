// Question-3 :- Imagine you are given a list of student objects, each containing the student's name and their marks. Your task is to create a function that checks results by filtering out students whose score is more than 90 and prints a message saying "Congratulations [Student Name]! You have cleared the exam."

// List to check the result of the students cleared the Exam or not : >>>

// Create a Array data : >>>
const studentList = [
  { name: "Ashu", marks: 99 },
  { name: "Arnav", marks: 92 },
  { name: "Advik", marks: 95 },
  { name: "Armaan", marks: 70 },
  { name: "Nikhil", marks: 90 },
];

function checkResult(student, studentList) {
  // "FOR LOOP" applied for looping on the data of all the students : >>>
  for (let i = 0; i < studentList.length; i++) {
    // "Outer - If Condition Apply for" If the student's name is in the student list then: =>>>
    if (studentList[i].name === student) {
      // "Inner - If Condition" applied for those students who have more than 90 marks: >>>
      if (studentList[i].marks > 90) {
        return `Congratulation ${student}! You have cleared the exam`;
        // "Else Condition" applied for those students who have less than 90 marks: >>>
      } else {
        return `Sorry ${student}! You haven't cleared the exam`;
      }
    }
  }
  // This "RETURN COMMAND" is for those students whose name does not match with the array data, then Invalid User !! will come: =>>>
  return `Invalid User!!!`;
}

let result = checkResult("Ashu", studentList);
// To print the returned value of the function : >>>
console.log(result);

// When we run this function, we will have the following information printed/output : >>>

// **************************************************** //
//                                                      //
// " Congratulation "Ashu" You have cleared the exam "  //
//                                                      //
// **************************************************** //
