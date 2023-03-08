const arraySeasonalFruits = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log("part 1");
console.log("Banana" ,"Water Melon");

var arrayFruits = ["Banana","Orange","Apple","Mango","Water Melon"];
arrayFruits.unshift("Papaya");
console.log("part 2");
console.log(arrayFruits);

var arrayFruits = ["Banana","Orange","Apple","Mango","Water Melon"];
arrayFruits.splice(3,1);
console.log("part 3");
console.log(arrayFruits);

var arrayFruits = ["Banana","Orange","Apple","Mango","Water Melon"];
arrayFruits.push("Pineapple");
console.log("part 4");
console.log(arrayFruits);

var arrayFruits = ["Banana","Orange","Apple","Mango","Water Melon"];
arrayFruits.splice(4, 0, "Dragon Fruit")
console.log("part 5");
console.log(arrayFruits);

var arrayFruits = ["Banana","Orange","Apple","Mango","Water Melon"];
arrayFruits.splice(1,1,"Kiwi")
console.log("part 6");
console.log(arrayFruits);

var arrayFruits = ["Orange","Apple","Mango","Water Melon"];
console.log("part 7");
console.log(arrayFruits);

var arrayFruits = ["Apple","Mango","Water Melon"];
console.log("part 8");
console.log(arrayFruits);

console.log("===== Traversing  ====================");
var arrayOfNumbers = [ 10, 20, 25, 15, 40, 45, 60, 40, 30, 22, 26 ];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}