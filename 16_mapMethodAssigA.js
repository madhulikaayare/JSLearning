const array = [20,11,40,25,23,11,9,31,60,2,19];

const arrayTransformed = [];
array.forEach( (currentValue) => {
    arrayTransformed.push(currentValue+10)
} );
console.log(arrayTransformed);


console.log("Using map()");
const arrayNew = array.map( (element) => {
   return element **2;
} )
console.log(arrayNew);

console.log([20,12,42,28,27,16,15,38,68,11,29]);