//tipos de datos en JavaScript

// String

var nombre = "Juan";

console.log("Hola " + nombre);

// Number
var numero = 100;

console.log(numero);

// Boolean

var verdadero = true;
var falso = false;

console.log(verdadero);

// Object

var objeto = {
    nombre: "Juan",
    edad: 37
}

console.log(objeto);


// Array

var colores = ["rojo", "verde", "azul"];

console.log(colores);

// Undefined

var sinValor;

console.log(sinValor);

// Null

var nulo = null;

console.log(nulo);

// NaN

var operacion = 100 / "Hola";

console.log(operacion);

// Infinity

var infinito = 100 / 0;

console.log(infinito);

// -Infinity

var menosInfinito = -100 / 0;

console.log(menosInfinito);

// typeof
// se usa para saber el tipo de dato de una variable

console.log(typeof nombre);
console.log(typeof numero);


// function
// se usa para crear funciones que se pueden reutilizar, además de que se pueden pasar como argumentos a otras funciones

function sumar(a, b) {
    return a + b;
}

console.log(sumar(5, 10));

// class
// se usa para crear objetos y métodos que se pueden reutilizar 

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        return "Hola, mi nombre es " + this.nombre;

}
}

var juan = new Persona("Juan", 37);
console.log(juan.saludar());

console.log(new Persona("Juan", 37).saludar());


//Symbol
//Se usa para crear un valor único

var simbolo = Symbol("mi-simbolo");

console.log(simbolo);

//BigInt

var big = 1234567890123456789012345678901234567890n;

console.log(big);

//Date

var fecha = new Date();

console.log(fecha);


