
let numbers = [1, 2, 3, 4, 5];


let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

let average = sum / numbers.length;


console.log("List of numbers:", numbers);
console.log("Sum of numbers:", sum);
console.log("Average of numbers:", average);
