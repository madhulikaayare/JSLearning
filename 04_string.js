var greet = "Good Morning";
console.log(typeof greet);
 
console.log("Total number of characters available into this string variable - greet");
var greetlength = greet.length;
console.log(greetlength);

console.log("Find character by index value");
var charAtIndex3 = greet.charAt(3);
console.log("character available at index 3 is:",charAtIndex3);

console.log("Find the last character");
var charAtLastIndex = greet.charAt(greetlength-1);
console.log("last character is:", charAtLastIndex);
