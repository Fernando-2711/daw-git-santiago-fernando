//1. crea un array que almacene cinco animales
const animales = ['dog', 'cat', 'bird', 'fish', 'rabbit'];

//2. añade dos o mas. Unoi al principio y otro al final
animales.unshift('tiger');
animales.push('lion');
console.log(animales);
//3. Elimina el que corresponda a la tercera posicion
delete animales[2];
console.log(animales);

animales.splice(2, 1);
console.log(animales);

//4. Crea un set que almacene cinco libros
const libros = new Set(['book1', 'book2', 'book3', 'book4', 'book5']);


//5. añade dos mas. Uno de ellos repetido
libros.add('book1');
libros.add('book6');

//6. Elimina uno concreto a tu eleccion
libros.delete('book3');

//7. Crea un mapa que asocie el numero del mes a su nombre
const meses = new Map([
  [1, 'enero'],
  [2, 'febrero'],
  [3, 'marzo'],
  [4, 'abril'],
  [5, 'mayo'],
  [6, 'junio'],
  [7, 'julio'],
  [8, 'agosto'],
  [9, 'septiembre'],
  [10, 'octubre'],
  [11, 'noviembre'],
  [12, 'diciembre']
]);

//8. Comprueba si el mes numero 5 existe en el map a su nombre
console.log(meses.has(5)); // true
console.log(meses.get(5)); // 'mayo'

//9. Añade al mapa una clave con un array que almacene los meses del verano
meses.set('verano', ['junio', 'julio', 'agosto']);

//10. Crea un array, transformalo a un set y almacenalo e un map
const array = ['element1', 'element2', 'element3'];
const set = new Set(array);
const map = new Map([[ 'array', set ]]);
console.log(map);