
function calculateRectangleArea(length, width) {
    return length * width;
}

function calculateRectanglePerimeter(length, width) {
    return 2 * (length + width);
}

let length = parseFloat(prompt("Enter the length of the rectangle:"));
let width = parseFloat(prompt("Enter the width of the rectangle:"));

let area = calculateRectangleArea(length, width);
let perimeter = calculateRectanglePerimeter(length, width);

console.log("The area of the rectangle is:", area);
console.log("The perimeter of the rectangle is:", perimeter);
