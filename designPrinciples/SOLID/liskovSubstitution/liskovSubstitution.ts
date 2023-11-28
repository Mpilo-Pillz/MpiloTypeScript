class Rectangle {
  constructor(public width, public height) {}

  setWidth(width) {
    this.width = width;
  }

  setHeight(height) {
    this.height = height;
  }

  area() {
    return this.height * this.width;
  }
}

class Square extends Rectangle {
  constructor(public width, public height) {
    super(width, height);
  }

  setWidth(width) {
    this.width = width;
    this.height = width;
  }

  setHeight(height) {
    this.height = height;
    this.width = height;
  }

  area() {
    return this.height * this.width;
  }
}

function increaseRectangleWidth(rectangle) {
  rectangle.setWidth(rectangle.width + 1);
}

const rectangle1: Rectangle = new Rectangle(10, 2);
// const rectangle2 = new Rectangle(5, 5); // since it has the same sides its a square. Create an instance of square and it should work
// substitute Rectangle for Square
const rectangle2: Rectangle = new Square(5, 5);
const square1: Square = new Square(6, 6);
const square2: Square = new Rectangle(7, 7);

increaseRectangleWidth(rectangle1);
increaseRectangleWidth(rectangle2);
increaseRectangleWidth(square1); // violates liskov cose hieght and width get increased giving a new result
increaseRectangleWidth(square2); // violates liskov cose hieght and width get increased giving a new result
console.log(rectangle1.area());
console.log(rectangle2.area());
console.log(square1.area());
console.log(square2.area());
