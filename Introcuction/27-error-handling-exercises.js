// 1. Captura una excepción utilizando try-catch
try {
    console.log("Intentando ejecutar código que puede fallar");
    let result = riskyOperation(); 
    console.log("Resultado:", result);
} catch (error) {
    console.error("Se ha producido un error:", error.message);
}

// 2. Captura una excepción utilizando try-catch y finally
try {
    console.log("Intentando ejecutar código que puede fallar");
    let result = riskyOperation(); 
    console.log("Resultado:", result);
} catch (error) {
    console.error("Se ha producido un error:", error.message);
} finally {
    console.log("Este bloque se ejecuta siempre, haya habido error o no.");
}

// 3. Lanza una excepción genérica
function riskyOperation() {
    throw new Error("Operación arriesgada falló");
}

// 4. Crea una excepción personalizada
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

// 5. Lanza una excepción personalizada
function anotherRiskyOperation() {
    throw new CustomError("Operación arriesgada falló");
}

// 6. Lanza varias excepciones según una lógica definida
try {
    let value = Math.random();
    if (value < 0.33) {
        throw new Error("Error genérico");
    } else if (value < 0.66) {
        throw new CustomError("Error personalizado");
    } else {
        console.log("Operación exitosa");
    }
} catch (error) {
    console.error("Se ha producido un error:", error.name, "-", error.message);
}

// 7. Captura varias excepciones en un mismo try-catch
try {
    let value = Math.random();
    if (value < 0.5) {
        throw new Error("Error genérico");
    } else {
        throw new CustomError("Error personalizado");
    }
} catch (error) {
    if (error instanceof CustomError) {
        console.error("Se ha producido un error personalizado:", error.message);
    } else {
        console.error("Se ha producido un error genérico:", error.message);
    }
}
// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
for (let i = 0; i < 10; i++) {
    let value = Math.random() < 0.5 ? "not a number" : (Math.random() * 100).toString();
    try {
        let floatValue = parseFloat(value);
        if (isNaN(floatValue)) {
            throw new Error(`No se puede convertir "${value}" a float`);
        }
        console.log(`Valor convertido a float: ${floatValue}`);
    } catch (error) {
        console.error("Error al convertir a float:", error.message);
    }
}

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
function checkProperty(obj, prop) {
    if (!obj.hasOwnProperty(prop)) {
        throw new CustomError(`El objeto no tiene la propiedad "${prop}"`);
    }
    console.log(`El objeto tiene la propiedad "${prop}"`);
}
let myObj = { name: "John", age: 30 };
try {
    checkProperty(myObj, "name");
    checkProperty(myObj, "address");
} catch (error) {
    console.error("Error:", error.message);
}

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
function retryOperation(maxRetries) {
    let attempts = 0;
    while (attempts < maxRetries) {
        try {
            console.log(`Intento ${attempts + 1}`);
            riskyOperation();
            console.log("Operación exitosa");
            break; // Salir del bucle si la operación es exitosa
        } catch (error) {
            console.error("Error en el intento:", error.message);
            attempts++;
            if (attempts === maxRetries) {
                console.error("Se alcanzó el número máximo de reintentos");
            }
        }
    }
}
retryOperation(10);