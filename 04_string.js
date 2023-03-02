 var greet = "Good Morning";
 console.log(typeof greet);

 console.log("Total number of chars available into this string variable - greet");
var greetLength = greet.length;
 console.log(greetLength);

 console.log("find the character at index");
 var charAtIndex3 = greet.charAt(3);
 console.log(charAtIndex3);

 console.log("find the last character");
 var lastChar = greet.charAt(greetLength-1);
 console.log(lastChar);

 console.log("find index by char value ");
 var indexOfM = greet.indexOf("M");
 console.log(indexOfM);

 console.log("find index of char which is not available");
 var indexOfZ = greet.indexOf("Z");
 console.log(indexOfZ);

 console.log("index of o",greet.indexOf("o"));
 console.log("index of o",greet.lastIndexOf("o"));