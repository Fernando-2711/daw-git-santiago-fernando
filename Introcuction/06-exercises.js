// 1. Escribe un comentario en una linea
//Este es el comentario

// 2. Escribe un comentario en varias lineas
/*
Este es
el comentario en
varias lineas
*/

// 3. Declara variables con valores asociados a todos los datos primitivos
//String
let nombre = "Fernando";
//Number
let edad = 18;
//Boolean
let esEstudiante = true;
//Undefined
let direccion;
//Null
let telefono = null;
//BigInt
let numeroGrande = BigInt(1234567890123456789012345678901234567890);
//Symbol
let simbolo = Symbol("simbolo");

// 4. Imprime por consola el valor de todas las variables
console.log("Nombre: " + nombre);
console.log("Edad: " + edad);
console.log("Es estudiante: "+ esEstudiante);
console.log("Direccion: "+direccion);
console.log("Telefono: "+telefono);
console.log("Numero grande: "+numeroGrande);

// 5. Imprime por consola el tipo de dato de todas las variables
console.log("Tipo de dato de nombre: " + typeof nombre);
console.log("Tipo de dato de edad: " + typeof edad);
console.log("Tipo de dato de esEstudiante: " + typeof esEstudiante);
console.log("Tipo de dato de direccion: " + typeof direccion);
console.log("Tipo de dato de telefono: " + typeof telefono);
console.log("Tipo de dato de numeroGrande: " + typeof numeroGrande);
console.log("Tipo de dato de simbolo: " + typeof simbolo);

// 6. A continuacion, modifica los valores de las variables
nombre = "Paco";
edad = 20;
esEstudiante = false;
direccion = "Calle Falsa 123";
telefono = "123456789";
numeroGrande = BigInt(9876543210987654321098765432109876543210);
simbolo = Symbol("42");

// 7. Imprime por consola el valor y el tipo de dato de todas las variables
console.log("Nombre: " + nombre + " - Tipo: " + typeof nombre);
console.log("Edad: " + edad + " - Tipo: " + typeof edad);
console.log("Es estudiante: " + esEstudiante + " - Tipo: " + typeof esEstudiante);
console.log("Direccion: " + direccion + " - Tipo: " + typeof direccion);
console.log("Telefono: " + telefono + " - Tipo: " + typeof telefono);
console.log("Numero grande: " + numeroGrande + " - Tipo: " + typeof numeroGrande);
console.log("Simbolo: " + simbolo + " - Tipo: " + typeof simbolo);

// 8. Declara constantes com los valores de las variables
