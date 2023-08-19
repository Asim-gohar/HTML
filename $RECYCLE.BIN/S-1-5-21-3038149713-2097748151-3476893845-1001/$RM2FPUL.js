"use strict";
class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
    calculateArea() {
        return this.length * this.width;
    }
    calculatePerimeter() {
        return 2 * (this.length + this.width);
    }
}
// Create an instance of the Rectangle class with user-defined values
const lengthInput = 5;
const widthInput = 3;
const rectangle = new Rectangle(lengthInput, widthInput);
// Calculate and display the area and perimeter of the rectangle
console.log(`Rectangle with length ${rectangle.length} and width ${rectangle.width}:`);
console.log(`Area: ${rectangle.calculateArea()}`);
console.log(`Perimeter: ${rectangle.calculatePerimeter()}`);
