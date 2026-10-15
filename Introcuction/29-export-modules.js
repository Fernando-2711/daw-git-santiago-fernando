//Exportacion de modulos

//Prpopiedades

export const PI = 3.1416
export let name = "Fernando"

//Funciones

export function suma(a,b){
    return a + b
}

//clases

export class Circle {
    constructor(radius){
        this.radius = radius
    }

    area(){
        return PI * this.radius * this.radius
    }

    perimeter(){
        return 2 * PI * this.radius
    }
}

//Exportacion por defecto

export default function substract(a, b){
    return a - b
}

console.log(substract(10, 4))