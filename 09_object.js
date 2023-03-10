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
const player = {
    fullName: "Virat Kohli",
    totalCenturies : 46,
    isMarries: true
}
Object.freeze(player);
player.totalVicket = 120; //Adding new property - Not allowed as object is freezed
delete player.totalCenturies;// deleting property - Not allowed as object is freezed
player.fullName = "King Kohli"; // Updating existing property - Not allowed as object is freezed

console.table(player);
const student = {
    firstName: "Elon",
    lastName: "Musk",
    age: 54
} 
const address = {
    country : "US",
    city : "Silicon Valley",
    PIN: "QA2345"
}

const newObject = {};
const mergedObject = object.assign({}, student,address);
console.table(mergedObject);
const student = {
    firstName: "Elon",
    lastName: "Musk",
    age: 54
} 
const address = {
    country : "US",
    city : "Silicon Valley",
    PIN: "QA2345"
}

// First way 
const mergedObject = Object.assign({}, student, address);
console.table(mergedObject);

// Second way 
const newObject = {};
Object.assign(newObject, student, address);
console.table(newObject);

//  Third way
Object.assign(student, address);
console.table(student);

//  Fourth way
Object.assign(address, student);
console.table(address);