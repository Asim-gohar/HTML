"use strict";
class rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
    calculateArea() {
        return this.length * this.width;
    }
    calculateperimeter() {
        return 2 * (this.length + this.width);
    }
}
const lengthInput = 5;
const widthInput = 3;
const rectangle01 = new Rectangle(lengthInput, widthInput);
console.log(` rectangle with length ${rectangle.length} and width ${rectangle.width}`);
console.log(` area ${rectangle.calculateArea()}`);
console.log(` perimeter ${rectangle.calculateperimeter()}`);
