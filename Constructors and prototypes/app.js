// var student = {
//   firstName: "Nadir",
//   lastName: "Bashir",
//   rollNo: "399",
//   courses: ["Javascript", "MongoDB", "React Native"],
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// // console.log(student);
// // console.log(student.firstName);
// // console.log(student.courses[1]);

// student.isActive = false;
// // console.log(student.isActive);

// // student.isActive = true;
// // console.log(student);

// // console.log(student["firstName"]);

// // console.log("firstName" in student);
// // console.log("address" in student);

// // for (var key in student) {
// //   console.log(key, student[key]);
// // }

// // student.getFullName();

// var student1 = {
//   firstName: "Gul",
//   lastName: "Ahmed",
//   rollNo: "310",
//   courses: ["Javascript", "React Native"],
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// var student2 = {
//   firstName: "Ali",
//   lastName: "Ahmed",
//   rollNo: "400",
//   courses: ["Javascript", "MongoDB"],
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// var student3 = {
//   firstName: "Asif",
//   lastName: "Shah",
//   rollNumber: "401",
//   courses: ["MongoDB", "React Native"],
//   getFullName: function () {
//     // console.log(`${this.firstName} ${this.lastName}`);
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// var students = [student, student1, student2, student3];

// for (var i = 0; i < students.length; i++) {
//   document.write(
//     `${students[i].rollNo} ${students[i].rollNumber} ${students[
//       i
//     ].getFullName()}  <br>`
//   );
// }

function Student(firstname, lastname, rollno, courses) {
  this.firstName = firstname;
  this.lastName = lastname;
  this.rollno = rollno;
  this.courses = courses;
  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

var student1 = new Student("ali", "ahmed", "399", ["course 1", "course 2"]);
var student2 = new Student("Salman", "Khan", "399", ["course 1", "course 2"]);
var student3 = new Student("Fakhar", "Zaman", "399", ["course 1", "course 2"]);
// console.log(student1.getFullName());
// console.log(student2.getFullName());
// console.log(student3.getFullName());
// student1.enrollNewCourse("Graphics");
// console.log(student1);

Student.prototype.enrollNewCourse = function (courseName) {
  this.courses.push(courseName);
};

