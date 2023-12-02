interface Shape {
    calculateArea(): number;
}

class Circle implements Shape {
    radius: number;
    constructor(radius: number = 0) {
        this.radius = radius;
    }
    calculateArea(): number {
        return 3.14 * Math.pow(this.radius, 2);
    }
}

class Square implements Shape {
    side: number;
    constructor(side: number = 0) {
        this.side = side;
    }
    calculateArea(): number {
        return Math.pow(this.side, 2);
    }
}

class Reactangle implements Shape {
    length: number;
    breadth: number;
    constructor(length: number = 0, breadth: number = 0) {
        this.length = length;
        this.breadth = breadth;
    }
    calculateArea(): number {
        return this.length * this.breadth;
    }
}

class ShapeFactory {
    createShape(shapeType: string, ...args: number[]): any {
        switch (shapeType.toLowerCase()) {
            case 'circle': {
                return new Circle(...args);
            }
            case 'square': {
                return new Square(...args);
            }
            case 'rectangle': {
                return new Reactangle(...args);
            }
        }
    }
}

const shapeFactory = new ShapeFactory();

const circle: Shape = shapeFactory.createShape("circle", 5);
console.log("Circle Area:", circle.calculateArea());

const square: Shape = shapeFactory.createShape("square", 4);
console.log("Square Area:", square.calculateArea());

const triangle: Shape = shapeFactory.createShape("rectangle", 3, 6);
console.log("Triangle Area:", triangle.calculateArea());
