//Ciclo while. En el siguiente ejemplo, se ejecutará el código dentro del ciclo mientras la variable i sea menor que 5. De lo contrario, se saldrá del ciclo.
let i = 0;
while (i < 5) {
  console.log(i+" while");
  i++;
}

//Ciclo do-while. En el siguiente ejemplo, se ejecutará el código dentro del ciclo al menos una vez, y luego se ejecutará el código mientras la variable i sea menor que 2. Si la condición es falsa, se ejecutará el código después del ciclo.
let j = 0;
do {
  console.log(j + " do-while");
  j++;
}
while (j < 2);

//Ciclo for. En el siguiente ejemplo, se ejecutará el código dentro del ciclo mientras la variable i sea menor que 6.
for (let i = 0; i < 6; i++) {
  console.log(i + " for");
}
//Ciclo for-in. En el siguiente ejemplo, se recorrerá el objeto persona y se mostrarán sus propiedades.
let persona = {
  nombre: "Juan",
  apellido: "Pérez",
  edad: 30
};
for (let propiedad in persona) {
  console.log(propiedad + ": " + persona[propiedad] + " for-in");
}
//Ciclo for-of. En el siguiente ejemplo, se recorrerá el arreglo colores y se mostrarán sus elementos.
let colores = ["rojo", "verde", "azul"];
for (let color of colores) {
  console.log(color + " for-of");
}
//Sentencias break y continue
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

