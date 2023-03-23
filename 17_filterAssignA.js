const array = [20,11,40,25,37,49,9,90,60,2,19];
console.log("====== greater than 50 =======");
const arrayElement = array.filter( (currentValue) => {
    return currentValue >= 50;
} );
console.log(arrayElement);

console.log("======== even number =======");
const arrayElement1 = array.filter(currentValue => currentValue%2==0 );
console.log(arrayElement1);

console.log("======== odd number ========");
const arrayElement2 = array.filter(currentValue => currentValue%2==1 );
console.log(arrayElement2);

console.log("====== multiple of 5 ========");
const arrayElement3 = array.filter(currentValue => currentValue%5==0 );
console.log(arrayElement3);

console.log("======== numbers between 20 and 50 ==========");
const arrayElement4 = array.filter(currentValue => currentValue>20 && currentValue<50 );
console.log(arrayElement4);
