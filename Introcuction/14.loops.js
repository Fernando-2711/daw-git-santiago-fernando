//lopps y bucles

//for

for (let i=0;i<10;i++){
    console.log(`Hola ${i}`)
}

const numbers = [1,2,3,4,5,6,7,8,9,10];
for (let i=0;i<numbers.length;i++){
    console.log(`Hola ${numbers[i]}`)
}

//while
let i = 0;
while (i < 10) {
    console.log(`Elemento: ${i}`);
    i++;
}

//do-while
let j = 0;
do {
    console.log(`Dia: ${j}`);
    j++;
} while (j < 10);

//for of

const myArray = [1,2,3,4];

for(let value of myArray) {
    console.log(value);
}

const mySet = new Set(["Hola","Mundo","Adios",87]);

for (let value of mySet) {
    console.log(value);
}

const myMap = new Map([["nombre","Fernando"],["edad",23],["profesion","programador"]]);

for (let value of myMap) {
    console.log(value);
}

for (let [clave, valor] of myMap) {
    console.log(valor);
}

const myString = "Hola Mundo";

for (let value of myString) {
    console.log(value);
}

//break and continue

for (let i=0;i<10;i++){
    if (i === 5) {
        break;
    }
    console.log(`Hola ${i}`)
}



