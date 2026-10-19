// 1. Exporta una función
export function myFunction() {
  console.log("Esta es una función exportada");
}

// 2. Exporta una constante
export const MY_CONSTANT = "Este es un valor constante";

// 3. Exporta una clase
export class MyClass {
  constructor() {
    console.log("Esta es una clase exportada");
  }
}

// 4. Importa una función
import { myFunction } from "./32-import-export-exercises.js";

// 5. Importa una constante
import { MY_CONSTANT } from "./32-import-export-exercises.js";

// 6. Importa una clase
import { MyClass } from "./32-import-export-exercises.js";

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)
export default function defaultFunction() {
  console.log("Esta es una función exportada por defecto");
}

export const DEFAULT_CONSTANT = "Este es un valor constante exportado por defecto";

export class DefaultClass {
  constructor() {
    console.log("Esta es una clase exportada por defecto");
  }
}

// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)
import defaultFunction, { DEFAULT_CONSTANT, DefaultClass } from "./32-import-export-exercises.js";

// 9. Exporta una función, una constante y una clase desde una carpeta


// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior