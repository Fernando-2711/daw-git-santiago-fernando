// Ciudadanos de primara clase

//Significa que tienen los mismos derechos y privilegios que por ejemplo cualquier variable

function greet(name) {
    console.log(`Hola, ${name}`)
}

greet("Fernando")

const greet3 = function greet2(name) {
    console.log(`Hola, ${name}`)
}

greet3("Fernando Santiago")

//Pasar funcion como parametro

function processGreeting(greetFunction, name){
    greetFunction(name)
}

processGreeting(greet, "Paco")
processGreeting(greet3, "Javi")

// Funcion retornar otra funcion

function returnGreeting(){
    return greet
}

//Arrow functions avanzadas
//Retorno implicito

const multiply = (a,b) => a*b
console.log(multiply(2,5))

//this handler

const handler ={
    name: "Fernando",
    greeting: function () {
        console.log(`Hola, ${this.name}`)
    },
    arrowGreeting: () =>{
        console.log(`Hola, ${this.name}`)
    }
}
handler.greeting()

// Cuidado con arrow function, el ambito cambio y no se puede acceder a las prpiedades de objeto

handler.arrowGreeting();

//IIFE . (Inmediatly Invoque Function Expression de una funcion invocada inmediatamente)

(function () {
    console.log("IIFE clasica")
})();

(() =>{
    console.log(`ÌIFE con arrow function`)
})();

//Parametros Rest

function sum1(...numbers){
    console.log(numbers)
    let suma=0
    for(let i=0;i<numbers.length;i++){
        suma=suma+numbers[i]
    }
    return suma
}

console.log(sum1(1,2,3,4,5,6,7,8,9))
sum1(1,2,3,4)

// Operadir Spread (...)

const numbers=[1,2,3]
function sumWithSpread(a,b,c) {
    return a+b+c
}


//Combinamos Rest y Spread en funciones

const numbers2= [5,7,9,11,13,15,8]
console.log(sum1(...numbers2))

//Clousures

function createCounter1(){
    let counter=0
    function executeCounter(){
        counter++
        console.log(`Contenedor: ${counter}`)
    }
    executeCounter()
}

createCounter1()
createCounter1()


//Recursividad

//La recursividad intenta descomoner un problema grande en una version identica pero mas pequeña hasta llegar a un
//  caso tan simple que se resuelve directamente. IMPORTANTE, SIEMPRE debe haber un caso simple o caso base.

//Implementacion en JavaScript

function factorial(n){
    if(n===0){
        return 1
    }else{
        return n*factorial(n-1)
    }
}

console.log(factorial(5))

//Elevar un numero a una potencia sin usar Math.pow() ni el operador **

function potencia(base, exponente){
    if(exponente===0){
        return 1
    }else{
        return base*potencia(base, exponente-1)
    }
}

console.log(potencia(2, 3))


//Sumar todos los numeros de 1 hasta n

function sumTo(n){
    if(n===1){
        return 1
    }else{
        return n+sumTo(n-1)
    }
}

console.log(sumTo(5))

//Sumar todos los numeros de un array

function sumArray(arr){
    if(arr.length===0){
        return 0
    }else{
        return arr[0]+sumArray(arr.slice(1))
    }
}

console.log(sumArray([1,2,3,4,5]))

//Invertir caracteres de un texto sin usar .reverse()

function reverseString(str){
    if(str.length===0){
        return ""
    }else{
        return str[str.length-1]+reverseString(str.slice(0,str.length-1))
    }
}

console.log(reverseString("Hola mundo"))

//Fibonacci: obtener el n-esimo numero de la serie de Fibonacci

function fibonacci(n){
    if(n===0){
        return 0
    }else if(n===1){
        return 1
    }else{
        return fibonacci(n-1)+fibonacci(n-2)
    }
}

console.log(fibonacci(6))

//Funciones parciales

//Una funcion parcial es una tecnica de programacion que consiste en fijar previamente uno o mas argumentos de la funcion
//oroginal devolviendo una nueva funcion que acepta los argumentos restantes.

function parcialSum(a) {
    return function (b,c) {
        return sum1(a,b,c)
    }
}

//Fijamosel valor a, por ejemplo a 5
const sumarCinco = parcialSum(5)

//Ejecutamos pasando b y c
const resultado1 = sumarCinco (3,2)
const resultado2 = sumarCinco (10,20)

console.log(resultado1)
console.log(resultado2)

//Llamada encadenada
const resultado = parcialSum(5)(10,10)
console.log(resultado)

//Calculador de Descuentos Parciales
//Crea una funcion llamada crearDescuento que reciba un porcentaje de descuento fijo y devuelva una nueva funcion que tome
//el precio unitario de un producto y la cantidad comprada, retornando el total a pagar tras aplicar el decuento.

function calcularTotal(porcentaje,precio,cantidad) {
    const subtotal =precio*cantidad
    const totalDescuento =subtotal*(porcentaje/100)
    return subtotal-totalDescuento
}

function crearDescuento (porcentaje) {
    return function (precio,cantidad) {
        return calcularTotal(porcentaje,precio,cantidad)
    }
}

const total = crearDescuento(10)(100,5)
console.log(`Total a pagar con descuento: ${total}`)
const total2 = crearDescuento(20)(50,3)
console.log(`Total a pagar con descuento: ${total2}`)
const total3 = crearDescuento(15)(200,2)
console.log(`Total a pagar con descuento: ${total3}`)