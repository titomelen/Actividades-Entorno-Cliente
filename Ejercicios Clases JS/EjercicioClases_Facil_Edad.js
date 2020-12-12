//Comparar edad
var nombre1 = prompt ('Escribe el nombre de la primera persona');
var edad1 = prompt ('Escribe la edad de la primera persona');
var nombre2 = prompt ('Escribe el nombre de la segunda persona');
var edad2 = prompt ('Escribe el nombre de la segunda persona');
var nombre3 = prompt ('Escribe el nombre de la tercera persona');
var edad3 = prompt ('Escribe el nombre de la tercera persona');

class persona{
    constructor(nombre1, edad1){
        this.nombre1 = nombre1;
        this.edad1 = edad1;
    }
    getNombre(){
        return `${this.nombre1}`
    }
    getEdad(){
        return `${this.edad1}`
    }
}

class persona2{
    constructor(nombre2, edad2){
        this.nombre2 = nombre;
        this.edad2 = edad;
    }
    getNombre(){
        return `${this.nombre2}`
    }
    getEdad(){
        return `${this.edad2}`
    }
}

class persona3{
    constructor(nombre3, edad3){
        this.nombre3 = nombre;
        this.edad3 = edad;
    }
    getNombre(){
        return `${this.nombre3}`
    }
    getEdad(){
        return `${this.edad3}`
    }
}

if(edad1 == edad2){
    document.write(this.nombre1 + 'tiene la misma edad que ' + this.nombre2)
}
else if(edad1 < edad2 && edad2 > edad3) {
    document.write(this.nombre2 + ' tiene mas edad que ' + this.nombre1 + ' y mas edad que ' + this.nombre3)
}
else if(edad1 > edad2 && edad1 > edad3){
    document.write(this.nombre1 + ' tiene mas edad que ' + this.nombre2 + ' y mas edad que ' + this.nombre3)
}
else if(edad3 > edad2 && edad3 > edad1){
    document.write(this.nombre3 + ' tiene mas edad que ' + this.nombre1 + ' y mas edad que ' + this.nombre2)
}