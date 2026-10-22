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
})()