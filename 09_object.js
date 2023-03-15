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
let sbiBank = {
    bankName : "sbiBank",
    location: "Narhe",
    account: 62514897564,
    ifsc: "SBIN0004598",
    interestRate: 10.75
}

let axisBank = {
    bankName: "Axis",
    location: "Bajirao Road, Pune",
    account: 4597863258,
    ifsc: "AXIS4567893",
    interestRate: 12.5
}

let hdfcBank = {
    bankName: "hdfc",
    location: "Sinhgad road",
    account: 4593587569,
    ifsc: "HDFC000489",
    interestRate: 11.79
}

let yesBank = {
    bankName: "YesBank",
    location: "Kothrud Pune",
    account: 4568792581,
    ifsc: "YESB0214597",
    interestRate: 14.5,
}
let sbiBank = {
    bankName : "sbiBank",
    location: "Narhe",
    account: 62514897564,
    ifsc: "SBIN0004598",
    interestRate: 10.75
}

let axisBank = {
    bankName: "Axis",
    location: "Bajirao Road, Pune",
    account: 4597863258,
    ifsc: "AXIS4567893",
    interestRate: 12.5
}

let hdfcBank = {
    bankName: "hdfc",
    location: "Sinhgad road",
    account: 4593587569,
    ifsc: "HDFC000489",
    interestRate: 11.79
}

for (const element of arrayOfBanks) {
    console.log(`${element.bankName}, ${element.location}, ${element.account}, ${element.interestRate}`);
}

//const array = [1, 2, 3, 4, 8, 9];
// for (const value of array) {
//    console.log(value); 
// }
class Bank {
    constructor(bankName, location, account, ifsc, interestRate ){
        this.bankName = bankName;
        this.location = location;
        this.account = account;
        this.ifsc = ifsc;
        this.interestRate = interestRate;
    }

}
const sbiBank = new Bank("SBI Bank", "Wakad", "62514897564", "SBIN0004598",10.75 );
console.log(sbiBank);

const axisBank = new Bank("Axis Bank", "Bajirao Road, Pune", "4597863258", "AXIS4567893", 10.50);
console.log(axisBank);