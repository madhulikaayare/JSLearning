let student =  {
    firstName : "Madhulika",
    lastName : "Ayare",
    isWorking : false,
    age : 22,
    collegeName : "RMDSSOE",
    id : 1234

};
console.log(student);
console.table(student);
console.log(typeof student);
// .dot notation
console.log(student.firstName);
// []notation
console.log(student["lastName"]);

// update propety
let collegeName = "ABC"
student.collegeName = "COEP Pune"
console.log(student.collegeName);

console.log(student.age);

// add new property
student.city = "Mumbai";
console.table(student);

student.country = "India";
delete student.isWorking;
console.table(student);

// empty object
let teacher = {
};
teacher.Name = "madhu";
console.log(teacher);
// first name = "mohit"


student.marks = {
    math: 80,
    physics: 60,
    drawing: 70
}