// ExcepciÃ³n

let myObject
// console.log(myObject.email)


// try-catch

try {
 // cÃ³digo que intenta ejecutar
 console.log("Empiezo la ejecuciÃ³n sin errores")
 console.log(myObject.email)
 console.log("Finaliza la ejecuciÃ³n sin errores")

} catch {
 // Bloque de error
 console.log("Se ha producido un error")

}



// finally

try { 
 console.log(myObject.email) 
} catch { 
 console.log("Se ha producido un error")
} finally {
    console.log("Este cÃ³digo se ejecuta siempre")
}


// Ponemos siempre try con catch
/*
try {
    console.log(myObject.email)
} finally {
    console.log("Este cÃ³digo se ejecuta siempre")
}
*/

// Lanzamiento de errores


// throw

 // throw new Error("Se ha producido un error")


  //Errores en JavaScript
/*
  Propiedades principales de un objeto Error

Cuando se crea o se lanza un error, el objeto resultante suele contener estas propiedades:
â€¢ message: Un mensaje descriptivo que explica quÃ© saliÃ³ mal.
â€¢ name: El tipo o nombre del error (por ejemplo, "Error", "TypeError", "ReferenceError").
â€¢ stack: La traza de la pila (muestra las funciones y lÃ­neas de cÃ³digo por las que pasÃ³ el programa hasta llegar al error).


Tipos de errores derivados

JavaScript incluye varios subtipos o clases que heredan de Error:
â€¢ SyntaxError: Ocurre cuando el cÃ³digo no cumple con las reglas de sintaxis de JavaScript y el motor no puede interpretarlo.
â€¢ Reference: (ReferenceError) Sucede cuando intentas usar una variable que no ha sido declarada o no existe en el Ã¡mbito actual.
â€¢ TypeError: Aparece cuando un valor no es del tipo esperado (por ejemplo, intentar llamar a algo que no es una funciÃ³n o leer una propiedad de null).
â€¢ RangeError: Se lanza cuando un valor numÃ©rico estÃ¡ fuera de su rango permitido (por ejemplo, al crear un array con una longitud negativa).
â€¢ URIError: Se produce cuando se usan mal las funciones globales de codificaciÃ³n/decodificaciÃ³n de URI (como encodeURI o decodeURI).
*/

class MiClaseError extends Error {
    constructor(message, a, b){
        super(message)
        this.a = a
        this.b = b
    }


}



function sumIntegers(a, b){
    if (typeof a !== "number" || typeof b !== "number"){
        throw new TypeError("TypeError - Esta operaciÃ³n sÃ³lo suma nÃºmeros")
    }

    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("Error - Esta funciÃ³n solo suma nÃºmeros enteros")
    }

    if (a ==0 || b == 0 ) {
        throw new MiClaseError("SumZeroIntegerError - Esta funciÃ³n no puede sumar un nÃºmero con 0")
    }
        
    return a + b
}

try {

    console.log(typeof 5)
    console.log(typeof 5.5)
    console.log(typeof "5")
    console.log(sumIntegers(5,10))
    console.log(sumIntegers(0,10))
    //console.log(sumIntegers("5",10))
    //console.log(sumIntegers(5.5,10))   

} catch (error) {
    console.log("Se ha producido un error", error.message)
    
}


/*Capturar y diferenciar varios errores (Manejo EspecÃ­fico)
A diferencia de lenguajes como Java o Python (que permiten escribir varios bloques catch),
 en JavaScript solo existe un bloque catch.
 Para manejar mÃºltiples errores, se evalÃºa el tipo de error dentro del catch con instanceof 
 o error.name.

Ventaja: Te permite tomar acciones correctivas distintas segÃºn la causa del problema.

Inconveniente: Requiere mÃ¡s cÃ³digo y conocer las clases de error que pueden lanzarse.
*/

try {
    console.log(sumIntegers(10,0))
}catch(error){
if (error instanceof TypeError) {
    console.log("Revisa los datos, ha lanzado error tipo TypeError")
} else if (error instanceof MiClaseError) {
    console.log("No se permite sumar ceros en esta funciÃ³n")
} else {
    console.log("No sabemos el tipo de error, error genÃ©rico")
}

}
