// <!-- Question-2 :-  Define an object that represents a student's information including name, age, and grade. Implement a method to update the student's grade.

const student = {
  Name: 'Ashwani Kumar',
  Age: 20,
  grade: 'A',
};

// Function to update Grade : =>>>
const updateGrade = (student, grade) => {
  student.grade = grade;
  return student;
};

// Test-Case : =>>>
console.log(updateGrade(student, `A+`));

// When we run this function, we will have the following information printed/output : >>>

// ***************************************************** //
//                                                       //
// { Name: 'Ashwani Kumar', Age: 20, grade: 'A+' }       //
//                                                       //
// ***************************************************** //
