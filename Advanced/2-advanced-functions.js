// 1. Crea una función que retorne a otra función
function createFunction() {
  return function() {
    console.log("Hola, soy una función retornada");
  };
}

createFunction()();


// 2. Implementa una función currificada que multiplique 3 números
function multiply(a) {
  return function(b) {
    return function(c) {
      return a * b * c;
    };
  };
}

console.log(multiply(2)(3)(4));


// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente
function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  return base * power(base, exponent - 1);
}

console.log(power(2, 5));


// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(),
// decrement() y getValue(), utilizando un closure para mantener el estado
function createCounter(initialValue) {
  let count = initialValue;
  return {
    increment: function() {
      count++;
    },
    decrement: function() {
      count--;
    },
    getValue: function() {
      return count;
    }
  };
}

const counter = createCounter(10);
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.getValue());


// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números
function sumManyTimes(multiplier, ...numbers) {
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  return sum * multiplier;
}

console.log(sumManyTimes(2, 1, 2, 3));


// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números
function sumWithCallback(callback, ...numbers) {
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  callback(sum);
}

sumWithCallback(function(result) {
  console.log(result);
}, 1, 2, 3, 4);


// 7. Desarrolla una función parcial
function partial(func, ...args) {
  return function(...newArgs) {
    return func(...args, ...newArgs);
  };
}

function greet(name, greeting) {
  return `${greeting}, ${name}`;
}

const greetJuan = partial(greet, "Juan");
console.log(greetJuan("Hola"));


// 8. Implementa un ejemplo que haga uso de Spread
const numbers = [1, 2, 3, 4, 5];
const copiedNumbers = [...numbers];
const combined = [...numbers, 6, 7];

console.log(copiedNumbers);
console.log(combined);


// 9. Implementa un retorno implícito
const add = (a, b) => a + b;

console.log(add(3, 7));


// 10. Haz uso del this léxico
const obj = {
  name: "Juan",
  greet: function() {
    return `Hola, soy ${this.name}`;
  }
};

console.log(obj.greet());