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

console.log("find the index by character value ");
var IndexOfM = greet.indexOf("M");
console.log("Index of character M is :", IndexOfM);

console.log("index of char which is not available in string" ,greet.indexOf("Z") );
console.log("Index of O char:",greet.indexOf("O"));

console.log("Index of o char:",greet.lastIndexOf("o"));

var replaceResult  = greet.replace("Morning","Evening");
console.log(replaceResult);
console.log(greet);

console.log("uppercase", replaceResult.toUpperCase());
console.log("lowercase", replaceResult.toUpperCase());
