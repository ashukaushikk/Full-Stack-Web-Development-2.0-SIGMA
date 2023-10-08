// <!-- Question-2 :-  Create a student enrollment system using JavaScript classes. Implement two classes, Student and Admission, to manage student enrollments, course admission, and enrollment tracking. The Student class should have methods for enrolling in courses and displaying enrolled courses, while the Admission class should handle student enrollments, course admission, and the display of enrolled students. Your task is to implement these classes with clear and organized code, adhering to the specified requirements provided.

// Class for student: =>>>
class Student {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.enrolledCourses = [];
  }

  // Enroll Courses: =>>>
  enrollCourse(courseName) {
    this.enrolledCourses.push(courseName);
    console.log(`${this.name} has enrolled in ${courseName}.`);
  }

  // Display Enrolled Courses: =>>>
  showCourses() {
    let str = `${this.name}'s enrolled courses: `;
    for (let course of this.enrolledCourses) {
      str += `${course}. `;
    }

    console.log(str);
  }
}

// Class for Admission: =>>>
class Admission extends Student {
  constructor() {
    super();
    this.enrolledStudents = [];
  }

  // Enroll Students: =>>>
  enrollStudent(student) {
    this.enrolledStudents.push(student);
    console.log(`${student.name} has been enrolled.`);
  }

  // Assign Course: =>>>
  assignCourse(student, courseName) {
    student.enrolledCourses.push(courseName);
    console.log(`${student.name} has been enrolled in ${courseName}`);
  }

  // Show Enrolled Students
  showEnrolledStudents() {
    console.log(`Enrolled students: `);
    for (let stu of this.enrolledStudents) {
      console.log(`- ${stu.name} (${stu.id})`);
    }
  }
}

// Test-Case: =>>>
const admissionOffice = new Admission();

let student1 = new Student('Armaan', 'armaan@pw.live');
let student2 = new Student('Ashwani', 'ashwani@pw.live');

admissionOffice.enrollStudent(student1);
admissionOffice.enrollStudent(student2);
console.log();

admissionOffice.assignCourse(student1, 'Facebook ADS expertization');
admissionOffice.assignCourse(student2, ' Full stack web development');
console.log();

student1.showCourses();
student2.showCourses();
console.log();

admissionOffice.showEnrolledStudents();

// When we run this function, we will have the following information printed/output : >>>

// **************************************************************** //
//                                                                  //
// Armaan has been enrolled.                                        //
// Ashwani has been enrolled.                                       //
//                                                                  //
// Armaan has been enrolled in Facebook ADS expertization           //
// Ashwani has been enrolled in  Full stack web development         //
//                                                                  //
// Armaan's enrolled courses: Facebook ADS expertization.           //
// Ashwani's enrolled courses:  Full stack web development.         //
//                                                                  //
// Enrolled students:                                               //
// - Armaan (armaan@pw.live)                                        //
// - Ashwani (ashwani@pw.live)                                      //
//                                                                  //
// **************************************************************** //

