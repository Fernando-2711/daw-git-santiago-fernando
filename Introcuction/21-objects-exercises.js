
// 1. Crea un objeto con 3 propiedades
let persona1 = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Barcelona"
}

// 2. Accede y muestra su valor
console.log(persona1.nombre);
console.log(persona1.edad);
console.log(persona1.ciudad);

// 3. Agrega una nueva propiedad
persona1.profesion = "Ingeniero";

// 4. Elimina una de las 3 primeras propiedades
delete persona1.ciudad;

// 5. Agrega una función e invócala
persona1.saludar = function() {
    console.log("Hola, soy " + this.nombre);
}
persona1.saludar();

// 6. Itera las propiedades del objeto
for (let propiedad in persona1) {
    console.log(propiedad + ": " + persona1[propiedad]);
}

// 7. Crea un objeto anidado
let persona2 = {
    nombre: "María",
    edad: 25,
    ciudad: "Madrid",
    trabajo: {
        profesion: "Diseñadora",
        empresa: "Design Studio"
    }
}

// 8. Accede y muestra el valor de las propiedades anidadas
console.log(persona2.trabajo.profesion);
console.log(persona2.trabajo.empresa);

// 9. Comprueba si los dos objetos creados son iguales
console.log(persona1 === persona2);

// 10. Comprueba si dos propiedades diferentes son iguales
console.log(persona1.nombre === persona2.nombre);