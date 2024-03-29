

## Índice
- [Mis apuntes del curso](#mis-apuntes-del-curso)
    - [Algunos tipos de datos en JavaScript:](#algunos-tipos-de-datos-en-javascript)
    - [Concatenación de strings:](#concatenación-de-strings)
    - [Uso de variables:](#uso-de-variables)
      - [Var: (No se recomienda su uso)](#var-no-se-recomienda-su-uso)
      - [let: (Se recomienda su uso) Ej: contador, acumulador, etc](#let-se-recomienda-su-uso-ej-contador-acumulador-etc)
      - [const: (Se recomienda su uso) Ej: PI, gravedad, etc](#const-se-recomienda-su-uso-ej-pi-gravedad-etc)
    - [Operadores aritméticos:](#operadores-aritméticos)
    - [Operadores de asignación:](#operadores-de-asignación)
    - [Operadores de comparación:](#operadores-de-comparación)
    - [Operadores lógicos:](#operadores-lógicos)
    - [Operadores de incremento y decremento:](#operadores-de-incremento-y-decremento)
      - [Predecremento (--variable):](#predecremento---variable)
      - [Postdecremento (variable--):](#postdecremento-variable--)
      - [Preincremento (++variable):](#preincremento-variable)
      - [Postincremento (variable++):](#postincremento-variable)
      - [En combinación con otras operaciones:](#en-combinación-con-otras-operaciones)
    - [Operador condicional (ternario):](#operador-condicional-ternario)
  - [Sentencias de control de flujo](#sentencias-de-control-de-flujo)
    - [if, else](#if-else)
    - [if, else if, else](#if-else-if-else)
    - [switch](#switch)
  - [Ciclos](#ciclos)
    - [Ciclo while.](#ciclo-while)
    - [Ciclo do-while](#ciclo-do-while)
    - [Ciclo for](#ciclo-for)
    - [Ciclo for-in](#ciclo-for-in)
    - [Ciclo for-of](#ciclo-for-of)
    - [Sentencias break y continue](#sentencias-break-y-continue)
  - [Arreglos](#arreglos)
  - [Funciones](#funciones)
  - [Objetos](#objetos)
    - [Métodos en objetos](#métodos-en-objetos)
      - [Método get](#método-get)
      - [Método set](#método-set)
        - [Acceso a propiedades de un objeto](#acceso-a-propiedades-de-un-objeto)
        - [Agregar, modificar y eliminar propiedades de un objeto](#agregar-modificar-y-eliminar-propiedades-de-un-objeto)
        - [Formas de imprimir objetos](#formas-de-imprimir-objetos)
- [Ejercicios en el casino](#ejercicios-en-el-casino)

# Mis apuntes del curso

 > **Nota:** Html:5 —> inicia con un HTML básico
  ### Algunos tipos de datos en JavaScript:
  - String
  - Number
  - Boolean
  - Null
  - Undefined
  - Object
  - Symbol
  - Function
  - Array
  - Date
  
```javascript
    var nombre = "Juan";
    var edad = 30;
    var mayor = true;
    var hijos = null;
    var vacio = undefined;
    var objeto = {nombre: "Juan", edad: 30};
    var simbolo = Symbol("mi simbolo");
    var funcion = function miFuncion(){};
    var arreglo = [1,2,3,4,5];
    var fecha = new Date();
```
  
  ### Concatenación de strings:

```javascript

var nombre = "Daisy";
var apellido = "Dew";
var nombreCompleto = nombre + " " + apellido;
var gatos = 3;
var perros = 1;
var aves = 1;
var totalMascotas = gatos + perros + aves;
console.log("La edad de " + nombre + " es: " + edad + " y tiene " + totalMascotas + " mascotas.");
```

  ### Uso de variables:

  #### Var: (No se recomienda su uso)
* Variables declaradas con var tienen un alcance de función (function scope) o global scope si se declaran fuera de una función.
* Pueden ser redeclaradas sin generar un error.
* No respetan el bloque de declaración de alcance (block scope), lo que puede llevar a comportamientos inesperados.

```javascript
   var x = 10;

if (true) {
    var x = 20;
    console.log(x); // imprime 20
}

console.log(x); // imprime 20
```

  #### let: (Se recomienda su uso) Ej: contador, acumulador, etc

* Introducida en ECMAScript 6 (ES6), let tiene alcance de bloque (block scope).
* No puede ser redeclarada en el mismo ámbito.
* Permite actualizar su valor.

```javascript
let y = 30;

if (true) {
    let y = 40;
    console.log(y); // imprime 40
}

console.log(y); // imprime 30
``` 

  #### const: (Se recomienda su uso) Ej: PI, gravedad, etc

* Al igual que let, const tiene alcance de bloque.
* Debe asignarse un valor al declararla y no puede ser reasignada.
* Es útil para declarar constantes.

```javascript
const z = 50;
// z = 60; // Esto generará un error, no se puede reasignar una constante
```

### Operadores aritméticos:

suma (+), resta (-), multiplicación (*), división (/), módulo (%), incremento (++) y decremento (--).

```javascript
var a = 10;
var b = 20;
var suma = a + b;
var resta = a - b;
var multiplicacion = a * b;
var division = a / b;
var modulo = a % b;
var incremento = a++;
var decremento = b--;
```

### Operadores de asignación:

```javascript
var x = 10;
x += 5; // x = x + 5;
x -= 5; // x = x - 5;
x *= 5; // x = x * 5;
x /= 5; // x = x / 5;
x %= 5; // x = x % 5;
```

### Operadores de comparación:

```javascript
var a = 10;
var b = 20;
var c = "10";
var d = 10;

console.log(a == b); // false
console.log(a != b); // true
console.log(a == c); // true
console.log(a === c); // false
console.log(a === d); // true
console.log(a !== c); // true 
console.log(a > b); // false
console.log(a < b); // true
console.log(a >= b); // false
console.log(a <= b); // true
```

### Operadores lógicos:

```javascript

var a = 10;
var b = 20;
var c = "10";
var d = 10;

console.log(a > b && a != c); // false
console.log(a < b && a != c); // true
console.log(a > b || a != c); // true
console.log(a < b || a != c); // true
console.log(!(a > b)); // true
console.log(!(a < b)); // false
```

### Operadores de incremento y decremento:

```javascript
var a = 10;
var b = 20; 
a++; // a = a + 1;
b--; // b = b - 1;
```

#### Predecremento (--variable):

Decrementa el valor de la variable antes de cualquier otra operación.
```javascript

let a = 5;
let b = --a;

console.log(a); // Resultado: 4 (a se decrementa antes de asignar a b)
console.log(b); // Resultado: 4 (b se asigna con el valor decrementado de a)
```

#### Postdecremento (variable--):

Decrementa el valor de la variable después de que se evalúa cualquier otra operación.
```javascript

let x = 10;
let y = x--;

console.log(x); // Resultado: 9 (x se decrementa después de asignar a y)
console.log(y); // Resultado: 10 (y se asigna con el valor original de x antes del decremento)
```
#### Preincremento (++variable):

Incrementa el valor de la variable antes de cualquier otra operación.
```javascript

let p = 3;
let q = ++p;

console.log(p); // Resultado: 4 (p se incrementa antes de asignar a q)
console.log(q); // Resultado: 4 (q se asigna con el valor incrementado de p)
```
#### Postincremento (variable++):

Incrementa el valor de la variable después de que se evalúa cualquier otra operación.
```javascript

let m = 8;
let n = m++;

console.log(m); // Resultado: 9 (m se incrementa después de asignar a n)
console.log(n); // Resultado: 8 (n se asigna con el valor original de m antes del incremento)
```
#### En combinación con otras operaciones:

```javascript

let valor = 5;

// Combinación con otras operaciones
let resultado1 = 2 * --valor;  // Decremento antes de la multiplicación
let resultado2 = 2 * valor--;  // Multiplicación antes del decremento

console.log(resultado1);  // Resultado: 8 (2 * 4)
console.log(resultado2);  // Resultado: 10 (2 * 5)
console.log(valor);       // Resultado: 4 (valor se ha decrementado en la operación anterior)
```

### Operador condicional (ternario):

```javascript
var edad = 18;
var resultado = (edad >= 18) ? "Puede votar" : "No puede votar";
console.log(resultado);
```

## Sentencias de control de flujo
### if, else
  
  ```javascript
  if (condición) {
    // código a ejecutar si la condición es verdadera
  } else {
    // código a ejecutar si la condición es falsa
  }
  ```
### if, else if, else
  ```javascript
if (condición) {
    // código a ejecutar si la condición es verdadera
} else if (otraCondición) {
    // código a ejecutar si la otra condición es verdadera y puede haber más de una
} else {
    // código a ejecutar si la condición y la otra condición son falsas
}
```
### switch
```javascript
var dia = 3;
switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Día no válido");
}
```

## Ciclos
### Ciclo while.
El ciclo while ejecuta una sentencia o bloque de sentencias hasta que la condición especificada se evalúe como falsa. La condición se evalúa antes de ejecutar la sentencia.
```javascript
let i = 0;
while (i < 5) {
  console.log(i+" while");
  i++;
}
```
### Ciclo do-while
El ciclo do-while ejecuta una sentencia o bloque de sentencias hasta que la condición especificada se evalúe como falsa. La condición se evalúa después de ejecutar la sentencia, lo que garantiza que la sentencia se ejecute al menos una vez.
```javascript
let j = 0;
do {
  console.log(j + " do-while");
  j++;
}
while (j < 2);

```
### Ciclo for
El ciclo for se repite hasta que la condición especificada se evalúe como falsa. El ciclo for se utiliza cuando el número de repeticiones es conocido. El ciclo for se compone de tres partes: inicialización, condición y expresión final.
```javascript
for (let i = 0; i < 6; i++) {
  console.log(i + " for");
}
```
### Ciclo for-in
El ciclo for-in se utiliza para recorrer las propiedades de un objeto. Las propiedades de un objeto incluyen las propiedades heredadas del prototipo del objeto. El ciclo for-in se utiliza para recorrer las propiedades de un objeto.
```javascript
let persona = {
  nombre: "Juan",
  apellido: "Pérez",
  edad: 30
};
for (let propiedad in persona) {
  console.log(propiedad + ": " + persona[propiedad] + " for-in");
}
```
### Ciclo for-of
El ciclo for-of se utiliza para recorrer los elementos de un objeto iterable como un arreglo. El ciclo for-of se utiliza para recorrer los elementos de un objeto iterable como un arreglo.
```javascript
let colores = ["rojo", "verde", "azul"];
for (let color of colores) {
  console.log(color + " for-of");
}
```
### Sentencias break y continue
La sentencia break termina el ciclo actual y transfiere el control del programa a la siguiente instrucción que sigue al ciclo. La sentencia continue termina la iteración
```javascript
let k = 0;
while (k < 10) {
  if (k == 5) {
    break;
  }
  console.log(k + " break");
  k++;
}
let l = 0;
while (l < 10) {
  if (l == 5) {
    l++;
    continue;
  }
  console.log(l + " continue");
  l++;
}
```

## Arreglos
Para acceder a un elemento de un arreglo
```javascript
let colores = ["rojo", "verde", "azul"];
console.log(colores[0]); // rojo
```
para recorrer un arreglo
```javascript
let colores = ["rojo", "verde", "azul"];
for (let i = 0; i < colores.length; i++) {
  console.log(colores[i]);
}
```
para modificar un arreglo
```javascript
let colores = ["rojo", "verde", "azul"];
colores[0] = "amarillo";
console.log(colores); // ["amarillo", "verde", "azul"]
```
## Funciones
Las funciones son bloques de código que se pueden reutilizar. Se definen una vez y se pueden llamar en cualquier momento. Las funciones pueden tomar parámetros y devolver un valor.
```javascript
function saludar() {
  console.log("Hola");
}
// Llamada a la función
saludar();
```
Las funciones pueden tomar parámetros y devolver un valor.
```javascript
function saludar(nombre) {
  console.log("Hola " + nombre);
}
saludar("Juan");
```
Las funciones pueden devolver un valor.
```javascript
function sumar(a, b) {
  return a + b;
}
let resultado = sumar(5, 3);
console.log(resultado); // 8
```
Función de tipo de expresión (function expression) son funciones que se asignan a una variable.
```javascript
let sumar = function(a, b) {
  return a + b;
};
let resultado = sumar(5, 3);
console.log(resultado); // 8
```
Función flecha (arrow function) es una forma más corta de escribir una función. Esta omite la palabra clave function y utiliza => para separar los parámetros de la función del cuerpo de la función.
```javascript
let sumar = (a, b) => a + b;
let resultado = sumar(5, 3);
console.log(resultado); // 8
```
Función flecha con más de un parámetro. 
```javascript
let sumar = (a, b) => {
  return a + b;
};
let resultado = sumar(5, 3);
console.log(resultado); // 8
```
Función flecha sin parámetros. Si la función flecha no tiene parámetros, se deben incluir paréntesis vacíos.
```javascript
let saludar = () => console.log("Hola");
saludar();
```
## Objetos
Los objetos son colecciones de propiedades y métodos. Las propiedades son pares clave-valor. Las propiedades de un objeto pueden ser de tipo string, number, boolean, array, object, function, symbol o null. Los métodos son funciones que se definen como propiedades de un objeto.
```javascript
let mascota = {
  nombre: "Sakura",
  edad: 8,
  vacunas: true,
  clase: "gato",
  }
console.log(mascota.nombre); // Sakura
};
```
### Métodos en objetos
Los métodos son funciones que se definen como propiedades de un objeto.
```javascript
let mascota2 = {
  nombre: "Papaya",
  edad: 8,
  vacunas: true,
  clase: "gato",
  maullar: function() {
    console.log("Miau");
  }
}
mascota2.maullar(); // Miau
```
#### Método get
El método get se utiliza para obtener el valor de una propiedad de un objeto.
```javascript
let mascota6 = {
  nombre: "Tinto",
  apellido: "Brass",
  edad: 10,
  vacunas: true,
  clase: "perro",
 get nombreCompleto() {
    return this.nombre + " " + this.apellido;
  }
}
console.log(mascota6.nombreCompleto); // Tinto Brass
```
#### Método set
El método set se utiliza para establecer el valor de una propiedad de un objeto.
```javascript
let mascota7 = {
    nombre: "Tinto",
    apellido: "Brass",
    edad: 10,
    vacunas: true,
    clase: "perro",
    get nombres () {
        return this.nombre.toUpperCase();
    },
    set nombres (nom) {
        this.nombre = nombre.toUpperCase();
    },
    }
    console.log(mascota7.nom); //TINTO
      mascota7.nom = "Alfredo";
    console.log(mascota7.nom); //ALFREDO
```

##### Acceso a propiedades de un objeto
```javascript
let mascota3 = {
  nombre: "Chiqui",
  edad: 15,
  vacunas: true,
  clase: "gato",
  pasatiempo: function() {
    console.log("Dormir");
  }
}
console.log(mascota3["nombre"]); // Chiqui

for (let propiedad in mascota3) {
  console.log(propiedad + ": " + mascota3[propiedad]); // nombre: Chiqui, edad: 15, vacunas: true, raza: gato, pasatiempo: function() { console.log("Dormir"); }
}
```
##### Agregar, modificar y eliminar propiedades de un objeto

```javascript
let mascota4 = {
  nombre: "Chess",
  edad: 5,
  vacunas: true,
  clase: "perro"
}
mascota4.color = "blanco y negro";
mascota4.edad = 6;
delete mascota4.vacunas;
```

##### Formas de imprimir objetos

```javascript
let mascota5 = {
    nombre: "Lola",
    edad: 0.2,
    vacunas: false,
    clase: "ave"
  }
  console.log("Hola soy " + mascota5.nombre + " y soy un " + mascota5.clase)//Concatenando valores

  for (propiedad in mascota5){
    console.log(propiedad + ": " + mascota5[propiedad]);
  } // for in

  let = mascotaArray = Object.values(mascota5)
    console.log(mascotaArray); //Array

  let jsonString = JSON.stringify(mascota5)
    console.log(jsonString); //Json String
```



---
# Ejercicios en el casino

1. Para entrar al casino hay que ser mayor de edad. Escribe un programa que pregunte al usuario su edad. Si tiene 18 años o más, que le muestre el mensaje "Puedes ingresar", de lo contrario, "Debes ser mayor de edad".

2. El casino pide que en el juego de la ruleta, el sistema muestre en pantalla si el número es par o impar. Escribe un programa que tome el número y muestre un mensaje si el número es par o impar.

3. Usa sentencias de control. Escribe un programa que diga cuántos créditos tiene el usuario. Sin embargo, el casino ofrece salvación de rachas, pero con un único intento. Si tiene 0, que le muestre el mensaje "No tienes créditos. Tienes un intento". Si no quedan más intentos, que le muestre el mensaje "¡Lo intentaste!. Consigue más créditos". Si tiene más de 0, que le muestre el mensaje "Tienes x créditos".

4. Usa &&. Los 10 mejores jugadores tendrán la oportunidad de ganar un premio cada hora. Escribe un programa que les envíe un mensaje de texto "¡Felicidades! Eres uno de los 10 mejores jugadores para esta tanda". Si no, que no les envíe nada.

5. Usa ||. Escribe un programa que le pregunte al usuario si quiere jugar a los Naipes con apuestas o sin apuestas, en cualquier caso, que le muestre el mensaje "¡A jugar!".

6. Usa sentencias de control. Escribe un programa que según es mes, muestre promociones en el casino. Si es invierno, que muestre el mensaje "¡Ven al casino! Tenemos promociones en bebidas calientes". Si es verano, que muestre el mensaje "¡Ven al casino! Tenemos promociones en bebidas alcohólicas". Si es primavera, que muestre el mensaje "¡Para dos es mejor! Refiere a alguien y te obsequiamos 10 créditos". Si es otoño, que muestre el mensaje "¡Ven al casino! Tenemos doble puntaje en blackjack".
---


