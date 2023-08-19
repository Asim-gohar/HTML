"use strict";
class Square {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
    calculateArea() {
        return this.length * this.width;
    }
    calculatePerimeter() {
        return 2 * (this.length * this.width);
    }
}
const lengthput = 24;
const widthput = 67;
const square = new Square(lengthput, widthput);
console.log(`square with length ${square.length} and width ${square.width}`);
console.log(`Area ${square.calculateArea()}`);
console.log(`Perimeter ${square.calculatePerimeter()}`);
