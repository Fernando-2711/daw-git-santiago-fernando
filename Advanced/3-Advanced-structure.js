// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(x => x ** 2);
const evenNumbers = squaredNumbers.filter(x => x % 2 === 0);
const sum = evenNumbers.reduce((acc, x) => acc + x, 0);


// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares
const cubeNumbers = numbers.map(x => x ** 3);
const filteredCubeNumbers = cubeNumbers.filter(x => x % 2 === 0);

// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección

//Resultado: ["leer","correr","cocinar","leer","videojuegos"]
const nestedArray = [["leer", "correr"], ["cocinar", "leer"], ["videojuegos"]];
const flattenedArray = nestedArray.flat();
console.log(flattenedArray);

let unsorted=[3, 1, 4, 2, 5];
const sorted=unsorted.sort()

console.log(unsorted)
console.log(sorted)
sorted.push(6)
console.log(unsorted)
console.log(sorted)

//sort
numbers.sort((a,b)=>a-b)
console.log(numbers)