

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

console.log(x); // imprime 20ç
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

## Ejercicios en el casino

1. Para entrar al casino hay que ser mayor de edad. Escribe un programa que pregunte al usuario su edad. Si tiene 18 años o más, que le muestre el mensaje "Puedes ingresar", de lo contrario, "Debes ser mayor de edad".
1. El casino pide que en el juego de la ruleta, el sistema muestre en pantalla si el número es par o impar. Escribe un programa que tome el número y muestre un mensaje si el número es par o impar.
3. Escribe un programa que diga cuántos créditos tiene el usuario. Sin embargo, el casino ofrece salvación de rachas, pero con un único intento. Si tiene 0, que le muestre el mensaje "No tienes créditos. Tienes un intento". Si no quedan más intentos, que le muestre el mensaje "¡Lo intentaste!. Consigue más créditos". Si tiene más de 0, que le muestre el mensaje "Tienes x créditos".
4. Usa &&. Los 10 mejores jugadores tendrán la oportunidad de ganar un premio cada hora. Escribe un programa que les envíe un mensaje de texto "¡Felicidades! Eres uno de los 10 mejores jugadores para esta tanda". Si no, que no les envíe nada.
5. Usa ||. Escribe un programa que le pregunte al usuario si quiere jugar a los Naipes con apuestas o sin apuestas, en cualquier caso, que le muestre el mensaje "¡A jugar!".



