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


var myName = "   Mohit   Sharma  ";
var myNameAfterTrim = myName.trim();
console.log("Removing extra start and end spaces using trim(): ",myNameAfterTrim, myName.length, myNameAfterTrim.length);


//find the total extra spaces removed from string - myName
console.log("finding extra spaces removed:");
var count = myName.length - myNameAfterTrim.length ;
console.log(count);

console.log(myName.trimStart(), myName.trimEnd());
console.log("includes()");
console.log("is substrin includes or not:", greet.includes("Mor"));
console.log("is substrin includes or not:", greet.includes("Afternoon"));
console.log("Is substring o includes in the greet or not: ", greet.includes("o"));

console.log("slice() method");
var sliceResult = greet.slice(5 , 11);
console.log(sliceResult);
console.log(greet.slice(2, 5));



console.log("split() method");
var greet = "Good Morning";
var splitResult = greet.split(" ");
console.log(splitResult);


console.log("split() method");
var greet = "Good Morning my dear friend";
var splitResult = greet.split(" ");
console.log(splitResult);
console.log("Total words: ", splitResult.length);

var myFriendList = "Billgates, Stew Job, Elon Musk, Ratan Tata, Sundar Pichai, Satya Nadella, Narayan Murti, Nandan Nilekani, Larry Page, Surgey Brain, Tim Cook";
console.log(myFriendList.length);