//1.Imprime por consola tu nombre si una variable toma su valor

//2.Imprime por consola un mensaje si el usuario y contraseña coincide con unos establecidos
let usuario = "fernando";
let contraseña = "1234";
if (usuario === "fernando" && contraseña === "1234") {
    console.log("Bienvenido");
}

//3.Verifica si un numero es positivo, negativo o cero e imprime un mensaje
let numero = 0;
if (numero > 0) {
    console.log("El número es positivo");
} else if (numero < 0) {
    console.log("El número es negativo");
} else {
    console.log("El número es cero");
}

//4.Verifica si una persona puede votar o no (Mayor o igual a 18) e indica cuantos años le faltan
let edad = 20;
if (edad >= 18) {
    console.log("Puedes votar");
} else {
    let quedan = 18 - edad;
    console.log(`No puedes votar, te faltan ${quedan} años`);
}

//5.Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad
let esAdulto = edad >= 18 ? "adulto" : "menor";
console.log("Eres un "+esAdulto);

//6.Muestra en que estacion del año nos encontramos dependiendo del valor de una variable "mes"
let mes = 4;
if (mes >= 2 && mes <= 4) {
    console.log("Estamos en primavera");
} else if (mes >= 5 && mes <= 9) {
    console.log("Estamos en verano");
} else if (mes >= 10 && mes <= 11) {
    console.log("Estamos en otoño");
} else {
    console.log("Estamos en invierno");
}

//7. Muestra el numero de dias que tiene un mes dependiendo de la variable del ejercicio anterior
if (mes==2) {
    console.log("El mes tiene entre 28 y 29 dias, depende de si es año bisiesto");
} else if (mes==4 || mes==6 || mes ==9 || mes ==11){
    console.log("Elmes tiene 30 dias");
} else {
    console.log("Elmes tiene 31 dias");
}

//8.Usa switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = "frances";
switch (idioma) {
    case "español":
        console.log("Hola");
        break;
    case "ingles":
        console.log("Hello");
        break;
    case "frances":
        console.log("Bonjour");
        break;
    default:
        console.log("Idioma no reconocido");
}

//9.