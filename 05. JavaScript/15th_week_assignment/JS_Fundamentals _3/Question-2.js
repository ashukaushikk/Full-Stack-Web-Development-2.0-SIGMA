// <!-- Question-2 :-  Define an object that represents a student's information including name, age, and grade. Implement a method to update the student's grade.

const student = {
  Name: 'Ashwani Kumar',
  Age: 20,
  grade: 'A',
};

// Function to update Grade : =>>>
const updateGrade = (student, grade) => {
  student.grade = grade;
};

// Function to print Student Object : =>>>
const printObj = (obj) => {
  for (let key in obj) {
    console.log(`${key} : ${obj[key]}`);
  }
};

// Test-Case : =>>>
updateGrade(student, 'A+');
printObj(student);

// When we run this function, we will have the following information printed/output : >>>

// ***************************//
// Name : Ashwani Kumar       //
// Age : 20                   //
// Grade : A+                 //
// ***************************//
