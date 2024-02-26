//Arreglos en JavaScript
//Los arreglos en JavaScript son objetos que permiten almacenar varios valores en una sola variable.
//Para crear un arreglo, se utilizan corchetes y se separan los elementos con comas.

let autos = ["BMW", "Audi", "Mercedes"];
console.log(autos); 
console.log(autos[1]); // Audi
//Para acceder a un elemento de un arreglo, se utiliza el índice del elemento.

//Para recorrer un arreglo, se puede utilizar un ciclo for.
let colores = ["rojo", "verde", "azul"];
for (let i = 0; i < colores.length; i++) {
  console.log(colores[i]);
}

//Modificar un elemento de un arreglo
//Para modificar un elemento de un arreglo, se utiliza el índice del elemento.
let frutas = ["manzana", "pera", "uva"];
frutas[1] = "banana";
console.log(frutas); // ["manzana", "banana", "uva"]