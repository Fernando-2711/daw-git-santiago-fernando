// 1. Crea un función que utilice error correctamente
console.error("Este es un mensaje de error");

// 2. Crea una función que utilice warn correctamente
console.warn("Este es un mensaje de advertencia");

// 3. Crea una función que utilice info correctamente
console.info("Este es un mensaje de información");

// 4. Utiliza table
console.table([{ name: "John", age: 30 }, { name: "Jane", age: 25 }]);

// 5. Utiliza group
console.group("Grupo 1");
console.log("Este es un mensaje dentro del grupo 1");
console.groupEnd();

// 6. Utiliza time
console.time("Timer 1");
console.timeEnd("Timer 1");

// 7. Valida con assert si un número es positivo
console.assert(5 > 0, "El número no es positivo");

// 8. Utiliza count
console.count("Contador 1");
console.count("Contador 1");
console.count("Contador 2");

// 9. Utiliza trace
function functionA() {
  functionB();
}

function functionB() {
  console.trace("Rastreo de la pila");
}

functionA();

// 10. Utiliza clear
console.clear();