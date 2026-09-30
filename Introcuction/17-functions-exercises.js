
// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
function suma(a, b) {
    return a + b;
}
console.log(suma(3,5));
// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
function mayor(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}
console.log(mayor([1, 2, 3, 4, 5]));
// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
function contarVocales(string) {
    let vocales = "aeiouAEIOU";
    let contador = 0;
    for (let i = 0; i < string.length; i++) {
        if (vocales.includes(string[i])) {
            contador++;
        }
    }
    return contador;
}
console.log(contarVocales("Hola, este es un ejemplo de cadena de texto"));

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
function aMayusculas(array) {
    let resultado = [];
    for (let i = 0; i < array.length; i++) {
        resultado.push(array[i].toUpperCase());
    }
    return resultado;
}
console.log(aMayusculas(["hoy","es","un","dia","maravilloso"]));
// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(esPrimo(7));

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
function elementosComunes(array1, array2) {
    let resultado = [];
    for (let i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i])) {
            resultado.push(array1[i]);
        }
    }
    return resultado;
}
console.log(elementosComunes([1, 2, 3, 4], [3, 4, 5, 6]));

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
function sumaPares(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            suma += array[i];
        }
    }
    return suma;
}
console.log(sumaPares([1, 2, 3, 4, 5, 6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]));

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
function cuadrados(array) {
    let resultado = [];
    for (let i = 0; i < array.length; i++) {
        resultado.push(array[i] * array[i]);
    }
    return resultado;
}
console.log(cuadrados([1, 2, 3, 4, 5]));

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
function invertirPalabras(cadena) {
    let palabras = cadena.split(" ");
    let resultado = [];
    for (let i = palabras.length - 1; i >= 0; i--) {
        resultado.push(palabras[i]);
    }
    return resultado.join(" ");
}
console.log(invertirPalabras("Hola, este es un ejemplo de cadena de texto"));
// 10. Crea una función que calcule el factorial de un número dado
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}
console.log(factorial(5)); // 120