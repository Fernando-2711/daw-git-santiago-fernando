//Funciones

//Simple

function myFuncion() {
    console.log("Hola Mundo")
}

myFuncion();

//Con parametros

function saludo(nombre){
    console.log("Hola "+nombre);
}

saludo("Fernando");

//Funciones anonimas

const myFunction = function () {
    console.log ("Buenos dias")
}
myFunction();

//Funcion anonima con parametros

const myFunctionParam = function (nombre) {
    console.log ("Buenos dias "+nombre)
}
myFunctionParam("Don Fernando");

//Funciones Flecha o Arrow functions

const myFunc = (name) => {
    console.log("Hola, buenas "+name)
}
myFunc("flecha")

const myFunc2 = (name) => console.log("Hola, buenas "+name)
myFunc2("flecha2")

//Parametros

function suma (a,b){
    console.log(a+b);
}
suma(3,8);
suma(3);
suma();
function sumaPorDefecto (a=0,b=0){
    console.log(a+b);
}
sumaPorDefecto(3,8);
sumaPorDefecto(3);
sumaPorDefecto();

//Retorno de valores

function multiplicacion(a,b){
    return a*b;
}
let resultado= multiplicacion(5,10);
console.log(resultado);

//Funciones anidadas

function externa(){
    console.log("Estamos en la funcion externa")
    function interna (){
        console.log("Estamos en la funcion interna")
    }
    interna();
}
externa();

//Funciones de orden superior

function funcionOrdenSuperior(funcion, parametros){
    funcion(parametros)
}
funcionOrdenSuperior(saludo,"Paco");

//forEach

const array = [1,2,3,4,5];
array.forEach((elemento) => {
    console.log(elemento);
});



