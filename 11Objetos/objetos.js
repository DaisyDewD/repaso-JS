//Funciones

//Declaración de función
function saludar() {
    console.log("Hola");
}

//Invocación de función
saludar();

//Función con parámetros
function saludarPersona(nombre) {
    console.log("Hola " + nombre);
}

saludarPersona("Daisy");
saludarPersona("Dew");

//Uso de return. La función devuelve el resultado de la suma
function sumar(a, b) {
    return a + b;
}
console.log(sumar(2, 3));

//Función de tipo expresión. Se asigna a una variable 
let restar = function (a, b) {
    return a - b;
};
console.log(restar(6, 3));

//Función flecha. Se utiliza la flecha => para definir la función y se omite la palabra function y las llaves {}
let multiplicar = (a, b) => a * b;
console.log(multiplicar(2, 3));

//Función flecha con más de un parámetro. Se utilizan paréntesis para los parámetros y se omite la palabra return y las llaves {} 
let dividir = (a, b) => a / b;
console.log(dividir(6, 3));

//Función Self-invoking. Se invoca a sí misma y se asigna a una variable 
(function (a, b) {
    return a + b;
})(2, 3);
