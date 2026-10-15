//Importacionde modulos

import {suma, PI, name, Circle} from "./29-export-modules.js"

import defaultImport from "./29-export-modules.js"
console.log(PI)
console.log(name)

//funciones
console.log(suma(5, 3))

//clases

let circle = new Circle(5)
console.log(circle.area())
console.log(circle.perimeter())

//Importacion por defecto

console.log(defaultImport(10, 4))