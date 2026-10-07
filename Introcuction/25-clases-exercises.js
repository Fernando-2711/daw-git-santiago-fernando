//Ejercicios

// 1. Crea una clase que reciba dos propiedades
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  // 2. Añade un método a la clase que utilice las propiedades
  presentarse() {
    console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
  }
}

// 3. Muestra los valores de las propiedades e invoca a la función
const persona1 = new Persona("Alice", 30);
persona1.presentarse();