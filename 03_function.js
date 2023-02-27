// // var num1 = "100";
// // var num2 = "200";
// // function swapVariables(value1,value2){
// // console.log( "before swap : "value1,value2);
// // var temp = value1;
// // value1 = value2;
// // value2 = temp;
// // console.log("after swap:" value1,value2);
// // }
// // swapVariables(num1,num2);


// //func with no arg and no return value
// function showFullName(){
//     console.log("My Full Name is : Madhulika Ayare");
// }
// showFullName();

// //func with  arg and no return value
// function showAge(age){
// console.log("My name is ", age);
// }
// showAge(22);

// //func with  no arg and  return value
// function fullName(){
//     var Name = "Madhulika Ayare";
//     return Name;
// }
// var fName = fullName();
// console.log(fName);

// //func with   arg and  return value
// function sumOfNumbers(num1,num2,num3){
// var sum = num1 + num2 + num3;
// return sum;
// }
// var sumResult = sumOfNumbers(10,45,79.56);
// console.log(sumResult);

// num1 = 568;
// num2 = 789;





// function swapVariables(value1, value2) {
//     console.log("Before Swap: ", value1, value2);
//     var temp = value1;
//     value1 = value2;
//     value2 = temp;
//     console.log("After Swap: ", value1, value2);
//     return "Swapping variables successfully completed";
//   }
//   var swapResult = swapVariables(num1, num2); // Function call or Function invoke
//   console.log(swapResult);
  
//   var swapResult2 =  swapVariables(str1, str2);
//   console.log(swapResult2);


  num1 = 100;
  num2 = 200;

  function swapVariable(value1,value2) {
    console.log("before swapping" , value1,value2);
    var temp = value1;
    value1 = value2;
    value2 =  temp;
    console.log("after swapping", value1,value2);
  }
   var result = swapVariable(value1,value2);
  console.log(result);