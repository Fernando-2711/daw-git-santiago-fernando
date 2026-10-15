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

// 4. Añade un método estático a la primera clase
Persona.obtenerInformacion = function() {
  console.log("Esta es una clase de persona.");
};

// 5. Haz uso del método estático
Persona.obtenerInformacion();

// 6. Crea una clase que haga uso de herencia
class Trabajador extends Persona {
  constructor(nombre, edad, salario) {
    super(nombre, edad);
    this.salario = salario;
  }
  presentarse() {
    console.log(`Hola, me llamo ${this.nombre}, tengo ${this.edad} años y trabajo como ${this.puesto}.`);
  }
}

// 7. Crea una clase que use de getters y setters
class Producto {
  constructor(nombre, precio) {
    this._nombre = nombre;
    this._precio = precio;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }

  get precio() {
    return this._precio;
  }

  set precio(nuevoPrecio) {
    if (nuevoPrecio >= 0) {
      this._precio = nuevoPrecio;
    } else {
      console.log("El precio no puede ser negativo.");
    }
  }
}



// 8. Crea una clase con propiedades privadas
class Empleado {
  #salario;

  constructor(salario) {
    this.#salario = salario;
  }

  // 9. Utiliza los get y set y muestra sus valores
  get salario() {
    return this.#salario;
  }

  set salario(nuevoSalario) {
    this.#salario = nuevoSalario;
  }
}

// 10. Sobrescribe un método de una clase que utilice herencia
class Gerente extends Trabajador {
  constructor(nombre, edad, salario, departamento) {
    super(nombre, edad, salario);
    this.departamento = departamento;
  }

  presentarse() {
    console.log(`Hola, me llamo ${this.nombre}, tengo ${this.edad} años, trabajo como ${this.puesto} y soy el gerente del departamento de ${this.departamento}.`);
  }
}
