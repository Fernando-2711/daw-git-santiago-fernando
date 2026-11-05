//Objetos avanzados

//Prototipos y herencia

//En JavaScript, un prototipoi es un objeto del cual otros objetos hereden propiedades y metodos
//a traves de un enlace interno

let person = {
    name: "Fernando",
    age: 18,
    greet() {
        console.log(`Hola, soy ${this.name}`)
    }
}



//Obtener el prototipo de un objeto

//console.log(person.__proto__)
//Accedemos al prototipo, pero se queda obsoleto.

console.log(Object.getPrototypeOf(person))
//Es el metodo estandar y oficial desde ES6+

//El objeto Object.prototype, contiene metodos integrados para poder usar por ejermplo .toString()

person.sayAge = function(){
    console.log(`Tengo ${this.age} años`)
}
console.log(person)
person.sayAge()

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greet() {
        console.log(`Hola, soy ${this.name}`)
    }
}


const fernando = new Person("Fernando", 18)
const maria = new Person("Maria", 25)

fernando.greet()
maria.greet()

console.log(fernando.greet === maria.greet) //true

//Herencia

let programmer = Object.create(person)

//Al usar Object.create(person), creas un objeto totalmente vacio pero cuyo prototipo interno apunta
// directamente al objeto.

programmer.language = "JavaScript"
programmer.name = "Juan"

console.log(person.name)
console.log(person.age)

console.log(programmer.name)
console.log(programmer.age)
console.log(programmer.language) 

programmer.greet()
programmer.sayAge()


//Metodos estaticos y de instancia

function Person2(name, age) {
    this.name = name
    this.age = age
}

//metodos de instancia (via prototipo)
Person2.prototype.greet = function() {
    console.log(`Hola, soy ${this.name}`)
}