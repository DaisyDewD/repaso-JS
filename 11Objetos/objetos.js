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
persona2.saludo();




//Acceder a los valores de un objeto

let persona3 = {
    nombre: "Juan",
    edad: 37,
    genero: "masculino",
    saludo: function(){
        console.log("Hola, soy " + this.nombre);
    }
}
console.log(persona3.edad);
for (propiedad in persona3){
    console.log(propiedad + ": " + persona3[propiedad]);
}

//Agregar o modificar propiedades de un objeto

let persona4 = {
    nombre: "Juan",
    edad: 37,
    genero: "masculino",
    saludo: function(){
        console.log("Hola, soy " + this.nombre);
    }
}
persona4.apellido = "Pérez";
persona4.edad = 38;
console.log(persona4);

//Eliminar propiedades de un objeto

let persona5 = {
    nombre: "Juan",
    edad: 37,
    genero: "masculino",
    saludo: function(){
        console.log("Hola, soy " + this.nombre);
    }
}
delete persona5.edad;
console.log(persona5);

let mascota5 = {
    nombre: "Lola",
    edad: 0.2,
    vacunas: false,
    clase: "ave"
  }
  console.log("Hola soy " + mascota5.nombre + " y soy un " + mascota5.clase)

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

  let mascota7 = {
    nombre: "Tinto",
    apellido: "Brass",
    edad: 10,
    vacunas: true,
    clase: "perro",
    get nombre2 () {
        return this.nombre.toUpperCase();
    },
    set nombre2 (nombre) {
        this.nombre = nombre.toUpperCase();
    },
    }
    console.log(mascota7.nombre2); //TINTO
    mascota7.nombre2 = "Alfredo";
    console.log(mascota7.nombre2); //ALFREDO

 
