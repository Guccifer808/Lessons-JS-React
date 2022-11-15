"use strict";

// //template of class
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // method to get area
  calcArea() {
    return this.height * this.width;
  }
}

//Наследование от Rectangle
class ColoredRectangleText extends Rectangle {
  constructor(height, width, text, bgColor) {
    super(); // наследует     this.height = height; this.width = width;
    this.text = text;
    this.bgColor = bgColor;
  }

  showMyProps() {
    console.log(`Text: ${this.text}, bgColor: ${this.bgColor}`);
  }
}
const div = new ColoredRectangleText(25, 10, "Hello world", "purple");
div.showMyProps();
console.log(div.calcArea());
// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);

// console.log(square.calcArea());
// console.log(long.calcArea());
