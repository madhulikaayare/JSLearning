console.log("swapping variables");
var sweety = "Sweety";
var cutie = "Cutie";
var temp;

var temp = sweety;
sweety = cutie;
cutie =  temp;
console.log(sweety,cutie);


console.log("swapping 3 variables ");
var num1 = 100;
var num2 = 200;
var num3 = 300;
console.log(num1,num2,num3);
console.log("after swapping");
var temp= num1;
num1 = num2;
num2 = temp
var temp = num2;
num2 = num3;
num3 = temp;
var temp = num3;
num3 = num1;
num1 = temp;
console.log(num1,num2,num3);
