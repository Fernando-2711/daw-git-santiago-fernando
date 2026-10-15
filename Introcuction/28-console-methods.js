//Console

//log

console.log("Hola JS")

//error

console.error("Error en JS")

//warn

console.warn("Advertencia en JS")

//info

console.info("Informacion en JS")

//table

let data = [
    ["1DAW",20],
    ["2DAW",70]
]
console.table(data)

//group

console.group("Grupo de mensajes")
console.log("Mensaje 1")
console.log("Mensaje 2")
console.groupEnd()

//time

console.time("Tiempo de ejecución")
for (let i = 0; i < 1000000; i++) {
    // Simulación de una operación costosa
}
console.timeEnd("Tiempo de ejecución")

//assert

let x = 5
console.assert(x > 10, "x no es mayor que 10")

//trace

function functionA() {
    functionB();
}

function functionB() {
    functionC();
}

function functionC() {
    console.trace("Rastreo de la pila");
}

functionA();