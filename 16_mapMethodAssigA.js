const array = [20,11,40,25,23,11,9,31,60,2,19];
console.log("========= add 10 to each element ============");
const arrayTransformed = [];
array.forEach( (currentValue) => {
    arrayTransformed.push(currentValue+10)
} );
console.log(arrayTransformed);

console.log("======= squaring ========");
const arrayNew = array.map( (element) => {
   return element **2;
} )
console.log(arrayNew);
 
console.log(" ====== index value addition ======");
console.log([20,12,42,28,27,16,15,38,68,11,29]);