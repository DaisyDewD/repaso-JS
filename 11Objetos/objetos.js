// Objetos

let persona = {
    nombre: "Daisy",
    apellido: "Dew",
    edad: 32,
    genero: "femenino",
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
}
console.log(persona.nombreCompleto());
//métodos de objetos

let persona2 = {
    nombre: "Juanito",
    edad: 37,
    genero: "masculino",
    saludo: function(){
        console.log("Hola, soy " + this.nombre);
    }
}

console.log(persona2.saludo());