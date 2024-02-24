

// tipo var: se puede reasignar. No se recomienda su uso por problemas de scope y hoisting (scope: alcance de la variable, hoisting: elevación de la variable al inicio del código)

var a = 10;
var b = 20;
var c = a + b;
var c = 10
console.log(c);


// tipo let: no se puede reasignar. Se recomienda su uso ya que respeta el scope y no tiene hoisting. Ej: contador, acumulador, etc
let d = 10;
let e = 20;
let f = d + e;
console.log(f);

// tipo const: no se puede reasignar. Se recomienda su uso para valores que no cambian en el tiempo. Ej: PI, gravedad, etc
const g = 10;
const h = 20;
const i = g + h;
console.log(i);

