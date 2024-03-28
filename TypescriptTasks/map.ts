let numbers: number[] = [1, 2, 3, 4, 5];

let squaredNumbers: number[] = numbers.map(function(num: number): number {
    return num * num;
});

console.log("Original array:", numbers);
console.log("Mapped array (squared):", squaredNumbers);
