//Tipos de datos primitivos
//String
let nombre = "Juan";
let apellido = 'Pérez';
let ciudad = `Madrid`;

//Number
let edad = 30; //Entero
let altura = 1.75; //Decimal

//Boolean
let esEstudiante = true;
let tieneTrabajo = false;

//Undefined
let direccion;
console.log(direccion); //undefined

//Null
let telefono = null;
console.log(telefono); //null

//BigInt
let numeroGrande = 1234567890123456789012345678901234567890n;
let otroNumeroGrande = BigInt("1234567890123456789012345678901234567890");
console.log(numeroGrande); //1234567890123456789012345678901234567890n
console.log(otroNumeroGrande); //1234567890123456789012345678901234567890n

//Symbol
let simbolo1 = Symbol("simbolo");

//Mostramos los tipos de datos
console.log("myName: " + typeof nombre);
console.log("myAge: " + typeof edad);
console.log("myHeight: " + typeof altura);
console.log("isStudent: " + typeof esEstudiante);
console.log("hasJob: " + typeof tieneTrabajo);
console.log("myAddress: " + typeof direccion);
console.log("myPhone: " + typeof telefono);
console.log("largeNumber: " + typeof numeroGrande);
console.log("anotherLargeNumber: " + typeof otroNumeroGrande);
console.log("mySymbol: " + typeof simbolo1);
