class Circulo {
  constructor (radio) {
    this.radio = radio;
  }

  getArea() {
    return Math.PI * Math.pow(this.radio, 2);
  }

  getPerimetro() {
    return 2 * Math.PI * this.radio;
  }
}