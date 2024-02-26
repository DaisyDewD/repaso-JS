//Sentencias if, else
//Dentro de los parentesis de la sentencia if se coloca la condición que se quiere evaluar. Si la condición es verdadera, se ejecutará el código que se encuentra dentro de las llaves. Si la condición es falsa, se ejecutará el código que se encuentra dentro de las llaves del else.

var a = 10;
var b = 20;

if (a > b) {
    console.log("a es mayor que b");
}
else {
    console.log("a es menor que b");
}

//Sentencias if, else if, else
//Dentro de los parentesis de la sentencia if se coloca la condición que se quiere evaluar. Si la condición es verdadera, se ejecutará el código que se encuentra dentro de las llaves. Si la condición es falsa, se ejecutará el código que se encuentra dentro de las llaves del else if. Si ninguna de las condiciones se cumple, se ejecutará el código que se encuentra dentro de las llaves del else.

var c = 10;
var d = 10;

if (c > d) {
    console.log("c es mayor que d");
}
else if (c == d) {
    console.log("c es igual a d");
}
else {
    console.log("c es menor que d");
}


//Sentencias switch

var dia = "jueves";

switch (dia) {

    case "lunes":
        console.log("Hoy es lunes");
        break;
    case "martes":
        console.log("Hoy es martes");
        break;
    case "miércoles":
        console.log("Hoy es miércoles");
        break;
    case "jueves":
        console.log("Hoy es jueves");
        break;
    case "viernes":
        console.log("Hoy es viernes");
        break;
    case "sábado":
        console.log("Hoy es sábado");
        break;
    case "domingo":
        console.log("Hoy es domingo");
        break;
    default:
        console.log("Ingrese un día válido");
        break;
}
//Sentencias break y continue (Ver While en Ejercicios/ciclos.js)
let k = 0;
while (k < 10) {
  if (k == 5) {
    break;
  }
  console.log(k);
  k++;
}
let l = 0;
while (l < 10) {
  if (l == 5) {
    l++;
    continue;
  }
  console.log(l);
  l++;
}