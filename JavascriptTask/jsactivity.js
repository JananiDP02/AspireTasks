const banks = ["SBI", "HDFC", "Axis bank", "ICICI bank"];

console.log("Pop function");
console.log(banks.shift()); 
console.log(banks);
console.log("\n");
console.log("Push function");
chocolates.unshift("Yes bank"); 
console.log(banks);
console.log("\n");
console.log("Array length");
let len = banks.length;
console.log(len);
console.log("\n");

console.log("Map Function"); //mapping
let numbers = [2, 4, 6, 8, 10];
function double(number) { 
  return number * 2;
}

let doubled_numbers = numbers.map(double);
console.log(doubled_numbers);
let sortedArray = doubled_numbers.sort((a, b) => a - b); //arrow function
console.log("\n");
console.log("Sorted Array");
console.log(sortedArray);
console.log("\n");

console.log("Slice function"); 
console.log(banks.slice(1, 3)); 
console.log("\n");

console.log("Callback function");
function greet(name, callback) {
  console.log("Hello" + name);
  callback(name);
}

function welcome(name) {
  console.log("Welcome to our bank, " + name + "!");
}

greet("Jake", welcome); 
