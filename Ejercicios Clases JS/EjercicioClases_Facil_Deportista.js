//Informacion de un deportista
var nombre = prompt('Introduce el nombre del jugador:');
var edad = prompt('Introduce la edad del jugador:');
var altura = prompt('Introduce la altura del jugador:');
var peso = prompt('Introduce el peso del jugador:');

class jugador {

    constructor(nombre, edad, altura, peso) {

        this.nombre = nombre;
        this.edad = edad;
        this.altura = altura;
        this.peso = peso;

    }

    getNombre() {
        return `${this.nombre}`
    }
    getEdad() {
        return `${this.edad}`
    }
    getAltura() {
        return `${this.altura}`
    }
    getPeso() {
        return `${this.peso}`
    }
}

document.write('El jugador ' + this.nombre + ' tiene de edad ' + this.edad  + ' con altura ' + this.altura + ' y peso ' + this.peso);