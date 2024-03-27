const chocolates = ["Dark Chocolate", "Milk Chocolate", "White Chocolate", "Hazelnut Chocolate"];

console.log("Pop function");
console.log(chocolates.shift()); 
console.log(chocolates);
console.log("\n");
console.log("Push function");
chocolates.unshift("Caramel Chocolate"); 
console.log(chocolates);
console.log("\n");
console.log("Array length");
let len = chocolates.length;
console.log(len);
console.log("\n");
console.log("Map Function");
let numbers = [2, 4, 6, 8, 10];

function double(number) { 
  return number * 2;
}

let doubled_numbers = numbers.map(double);
console.log(doubled_numbers);
let sortedArray = doubled_numbers.sort((a, b) => a - b); 
console.log("\n");
console.log("Sorted Array");
console.log(sortedArray);
console.log("\n");
console.log("Slice function"); 
console.log(chocolates.slice(1, 3)); 
console.log("\n");
