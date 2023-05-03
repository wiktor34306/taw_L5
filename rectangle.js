"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Complex = exports.Rectangle = exports.Point = void 0;
class Complex {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    adding(other) {
        const real = this.real + other.real;
        const imaginary = this.imaginary + other.imaginary;
        return new Complex(real, imaginary);
    }
    subtraction(other) {
        const real = this.real - other.real;
        const imaginary = this.imaginary - other.imaginary;
        return new Complex(real, imaginary);
    }
    multiplication(other) {
        const real = this.real * other.real - this.imaginary * other.imaginary;
        const imaginary = this.real * other.imaginary + this.imaginary * other.real;
        return new Complex(real, imaginary);
    }
    toString() {
        return `${this.real} + ${this.imaginary}i`;
    }
}
exports.Complex = Complex;
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    move(dx, dy) {
        this.x += dx;
        this.y += dy;
    }
}
exports.Point = Point;
class Rectangle {
    constructor(topLeft, topRight, bottomLeft, bottomRight) {
        this.topLeft = topLeft;
        this.topRight = topRight;
        this.bottomLeft = bottomLeft;
        this.bottomRight = bottomRight;
    }
    move(dx, dy) {
        this.topLeft.move(dx, dy);
        this.topRight.move(dx, dy);
        this.bottomLeft.move(dx, dy);
        this.bottomRight.move(dx, dy);
    }
    getArea() {
        const width = this.topRight.x - this.topLeft.x;
        const height = this.bottomLeft.y - this.topLeft.y;
        return width * height;
    }
}
exports.Rectangle = Rectangle;
