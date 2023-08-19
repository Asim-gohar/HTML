class Rectangle {
    length: number;
    width: number;
  
    constructor(length: number, width: number) {
      this.length = length;
      this.width = width;
    }
  
    calculateArea(): number {
      return this.length * this.width;
    }
  
    calculatePerimeter(): number {
      return 2 * (this.length + this.width);
    }
  }
  
  // Create an instance of the Rectangle class with user-defined values
  const lengthInput: number = 5;
  const widthInput: number = 3;
  const rectangle: Rectangle = new Rectangle(lengthInput, widthInput);
  
  // Calculate and display the area and perimeter of the rectangle
  console.log(`Rectangle with length ${rectangle.length} and width ${rectangle.width}:`);
  console.log(`Area: ${rectangle.calculateArea()}`);
  console.log(`Perimeter: ${rectangle.calculatePerimeter()}`);
  


    
