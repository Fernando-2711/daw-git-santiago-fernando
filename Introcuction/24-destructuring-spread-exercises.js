//Ejercicios

// 1. Usa desestructuración para extraer los dos primeros elementos de un array
const [first, second] = [1, 2, 3, 4];
console.log(first);
console.log(second);

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
const [third = 0, ,fourth = 2] = [1, 2, 3, 4];
console.log(third);
console.log(fourth);

// 3. Usa desestructuración para extraer dos propiedades de un objeto
const { name, age } = { name: "Alice", age: 30, city: "New York" };
console.log(name);
console.log(age);

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
// a nuevas variables con nombres diferentes
const { name: nombre, age: edad } = { name: "Bob", age: 25, city: "Los Angeles" };
console.log(nombre);
console.log(edad);

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
const persona = {
  nombre: "Charlie",
  edad: 35,
  domicilio: {
    ciudad: "Alhaurin",
    provincia: "Malaga"
  }
};
const { domicilio: { ciudad, provincia } } = persona;
console.log(ciudad);
console.log(provincia);

// 6. Usa propagación para combinar dos arrays en uno nuevo
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinarArray = [...array1, ...array2];
console.log(combinarArray);

// 7. Usa propagación para crear una copia de un array
const originalArray = [1, 2, 3];
const copiaArray = [...originalArray];
console.log(copiaArray);

// 8. Usa propagación para combinar dos objetos en uno nuevo
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinardObj = { ...obj1, ...obj2 };
console.log(combinardObj);

// 9. Usa propagación para crear una copia de un objeto
const originalObj = { x: 1, y: 2 };
const copiaObj = { ...originalObj };
console.log(copiaObj);
// 10. Combina desestructuración y propagación

