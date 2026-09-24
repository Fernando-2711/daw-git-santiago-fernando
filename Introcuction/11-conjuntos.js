//Array
const frutas = ['manzana', 'banana', 'naranja'];

//Herramientas de arrays
frutas.push('uva'); // Agrega un elemento al final
frutas.pop(); // Elimina el último elemento
frutas.shift(); // Elimina el primer elemento
frutas.unshift('fresa'); // Agrega un elemento al inicio

//Recorrer un array
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

//Slice con arrays
const frutasCortadas = frutas.slice(1, 3); // Corta desde el índice 1 hasta el 3 (sin incluirlo)
console.log(frutasCortadas);

//Splice con arrays
frutas.splice(1, 1); // Elimina 1 elemento desde el índice 1
console.log(frutas);

//Conjuntos
const conjuntoA = new Set([1, 2, 3, 4]);

//Imprimir el conjunto
console.log(conjuntoA);

//Agregar elementos al conjunto
conjuntoA.add(5);
conjuntoA.add(3); // No se agregará porque ya existe

//Eliminar un elemento del conjunto
conjuntoA.delete(2);

//Verificar si un elemento está en el conjunto
console.log(conjuntoA.has(3)); // true
console.log(conjuntoA.has(2)); // false
