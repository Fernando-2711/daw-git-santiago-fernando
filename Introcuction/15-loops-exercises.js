//1.Crea un bucle que imprima los numeros del 1 al 20;
for (let i = 1; i<=20;i++) {
    console.log(i);
}

//2.Crea un bucle que sume todos los numeros del 1 al 100 y muestre el resultado
let i=0;
let resultado=0;
do{
    resultado=resultado + i;
    i++

}while(i<100)
console.log(resultado);

//3.Crea un bucle que imprima todos los numeros paras entre 1 y 50

for (let i=1;i<=50;i++) {
    if(i%2==0) {
        console.log(i);
    }
}

//4. Dado un array de nombres, usa un bucle para imprimir cada nombre por consola
let nombres= ["Fernando","Maria","Ruben","Carlos"]
for (let i=0; i<nombres.length; i++) {
    console.log(nombres[i]);
}

//5. Escribe in bucle que cuente el numero de vocales en una cadena de texto
let texto = "Hola, este es un ejemplo de cadena de texto para contar vocales";
let contador=0;
for (let i=0; i<texto.length; i++) {
    if (texto[i].toLowerCase() === 'a' || texto[i].toLowerCase() === 'e' || texto[i].toLowerCase() === 'i' || texto[i].toLowerCase() === 'o' || texto[i].toLowerCase() === 'u') {
        contador++;
    }
}
console.log(contador);

//6.Dado un array de numeros, usa un bucle para multiplicar todos los numeros y motrar el producto
let numeros = [1, 2, 3, 4, 5];
let producto = 1;
for (let i = 0; i < numeros.length; i++) {
    producto = producto * numeros[i];
}
console.log(producto);

//7. Escribe un bucle que imprma la tabla de multiplicar del 5
let resultado2=0;
for (let i=1; i<=10; i++) {
    resultado2=5*i;
    console.log("5 x "+i+" = "+resultado2);
}

//8. Usa un bucle para invertir una cadena de texto
let mitexto = "Hola, este es un ejemplo de cadena de texto";
let textoInvertido = "";
for (let i = mitexto.length - 1; i >= 0; i--) {
    textoInvertido += mitexto[i];
}
console.log(textoInvertido);

//9. Usa un bucle para generar los primeros 10 numeros de la secuencia de Fibonacci
let fib = [0, 1];
for (let i = 2; i < 10; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
}
console.log(fib);

//10. Dado un array de nuemros, usa un bucle para crear un nuevo array que contenga numeros mayores de 10
let numeros2 = [5, 12, 8, 20, 3, 15];
let mayoresDeDiez = [];
for (let i = 0; i < numeros2.length; i++) {
    if (numeros2[i] > 10) {
        mayoresDeDiez.push(numeros2[i]);
    }
}
console.log(mayoresDeDiez);