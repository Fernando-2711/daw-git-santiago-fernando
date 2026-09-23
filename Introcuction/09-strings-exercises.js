//1. Concatena dos cadenas de texto
console.log("Hola" + " " + "Mundo");

//2.Muestra la longitud de una cadena de texto
console.log("Hola".length);

//3. Muestra el primer y el ultimo caracter de un string
console.log("Hola"[0]);
console.log("Hola"[3]);
//4. Convierte a mayusculas y minusculas un string
console.log("Hola".toUpperCase());
console.log("Hola".toLowerCase());

//5. Crea una cadenma de texto en varias lineas
console.log("Hola\nBuenos dias\nSeñor");

//6. Interpola el valor de una variable en un string
let nombre = "Fernando";
console.log(`Hola, ${nombre}!`);

//7.Remplaza todos los espacios en blnco de un stringf por guiones
console.log("Hola Mundo espero que tengais un buen dia".replace(/ /g, "-"));

//8.Comprueba si una cadena de texto contiene una palabra concreta
console.log("Hola Mundo".includes("Mundo"));

//9. Comprueba si dos strings son iguales
console.log("Hola" === "Hola");

//10. Comprueba si dos strings tienen la misma longitud
console.log("Hola".length === "Mundo".length);