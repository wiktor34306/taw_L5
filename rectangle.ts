class Complex {
  private real: number;
  private imaginary: number;

  constructor(real: number, imaginary: number) {
    this.real = real;
    this.imaginary = imaginary;
  }

  adding(other: Complex): Complex {
    const real = this.real + other.real;
    const imaginary = this.imaginary + other.imaginary;
    return new Complex(real, imaginary);
  }

  subtraction(other: Complex): Complex {
    const real = this.real - other.real;
    const imaginary = this.imaginary - other.imaginary;
    return new Complex(real, imaginary);
  }

  multiplication(other: Complex): Complex {
    const real = this.real * other.real - this.imaginary * other.imaginary;
    const imaginary = this.real * other.imaginary + this.imaginary * other.real;
    return new Complex(real, imaginary);
  }

  toString(): string {
    return `${this.real} + ${this.imaginary}i`;
  }
}

class Point {
  constructor(public x: number, public y: number) {}

  move(dx: number, dy: number): void {
    this.x += dx;
    this.y += dy;
  }
}

class Rectangle {
  constructor(public topLeft: Point, public topRight: Point, public bottomLeft: Point, public bottomRight: Point) {}

  move(dx: number, dy: number): void {
    this.topLeft.move(dx, dy);
    this.topRight.move(dx, dy);
    this.bottomLeft.move(dx, dy);
    this.bottomRight.move(dx, dy);
  }

  getArea(): number {
    const width = this.topRight.x - this.topLeft.x;
    const height = this.bottomLeft.y - this.topLeft.y;
    return width * height;
  }
}


export { Point, Rectangle, Complex };