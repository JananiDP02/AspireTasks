function calculateRectangleArea(length: number, width: number): number {
    return length * width;
}

function calculateRectanglePerimeter(length: number, width: number): number {
    return 2 * (length + width);
}


let lengthInput: string | null = prompt("Enter the length of the rectangle:");
let widthInput: string | null = prompt("Enter the width of the rectangle:");

let length: number = parseFloat(lengthInput!) || 0;
let width: number = parseFloat(widthInput!) || 0;

let area: number = calculateRectangleArea(length, width);
let perimeter: number = calculateRectanglePerimeter(length, width);

console.log("The area of the rectangle is:", area);
console.log("The perimeter of the rectangle is:", perimeter);
