/** No olvides apagar copilot ^^ **/
//Ejercicio 1
//Usa operador ternario. Para entrar al casino hay que ser mayor de edad. Escribe un programa que pregunte al usuario su edad. Si tiene 18 años o más, que le muestre el mensaje "Puedes ingresar", de lo contrario, "Debes ser mayor de edad".

let edad = 18;
let mensaje = (edad >= 18) ? "Puedes ingresar" : "Debes ser mayor de edad";
console.log(mensaje);

//Ejercicio 2
//Usa módulo. El casino pide que en el juego de la ruleta, el sistema muestre en pantalla si el número es par o impar. Escribe un programa que tome el número y muestre un mensaje si el número es par o impar.

let yo = 9;

if (yo % 2 == 0) {
    console.log("El número es par");
} else {
    console.log("El número es impar");
}
//El % es el operador módulo, que devuelve el resto de la división de dos números. Si el resto es 0, significa que el número es par, de lo contrario, es impar.

//Ejercicio 3
//Escribe un programa que diga cuántos créditos tiene el usuario. Sin embargo, el casino ofrece salvación de rachas, pero con un único intento. Si tiene 0, que le muestre el mensaje "No tienes créditos. Tienes un intento". Si no quedan más intentos, que le muestre el mensaje "¡Lo intentaste!. Consigue más créditos". Si tiene más de 0, que le muestre el mensaje "Tienes x créditos".

let numero = 4;

let intentos = -1;
if (numero == 0) {
    console.log("No tienes créditos. Tienes un intento");
}
else if (numero > 0){
  console.log("Tienes " + numero + " créditos");
}
else if (numero = intentos){
  console.log("¡Lo intentaste!. Consigue más créditos");
}
else{
    console.log("¡Lo intentast!. Consigue más créditos");
}

//Ejercicio 4
//Usa &&. Los 10 mejores jugadores tendrán la oportunidad de ganar un premio cada hora. Escribe un programa que les envíe un mensaje de texto "¡Felicidades! Eres uno de los 10 mejores jugadores para esta tanda". Si no, que no les envíe nada.

let jugador = 5;
let min = 1;
let max = 10;
if (jugador >= min && jugador <= max) {
    console.log("¡Felicidades! Eres uno de los 10 mejores jugadores para esta tanda");
}

//Ejercicio 5
//Usa ||. Escribe un programa que le pregunte al usuario si quiere jugar a los Naipes con apuestas o sin apuestas, en cualquier caso, que le muestre el mensaje "¡A jugar!".

let apuesta = "si";
if (apuesta == "si" || apuesta == "no") {
    console.log("¡A jugar!");
}