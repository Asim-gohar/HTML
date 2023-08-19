class rectangle {
    static calculateArea() {
        throw new Error("Method not implemented.");
    }
    static calculatePerimeter() {
        throw new Error("Method not implemented.");
    }
    length:number;
    width:number;
    static width: any;

    constructor(length:number ,width:number ) {
        this.length=length;
        this.width=width;
    }
     calculateArea(): number {
        return this.length * this.width;
     }
    calculatePerimeter(): number {
        return 2* (this.length + this.width);
    }

    }
  const lengthInput=5;
    const widthInput=3;
    const rectangle01= new rectangle (lengthInput, widthInput);
     
    console.log(` Rectangle with length: ${rectangle.length} and width: ${rectangle.width}`)
    console.log(` Area: ${rectangle.calculateArea()}`)
    console.log(` Perimeter: ${rectangle.calculatePerimeter()}`)

    
    
     
        
     
