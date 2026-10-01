//Objetos

//Sintaxis

let person={
    name: "Fernando",
    age: 23,
    alias: "Ferni"
}

//Acceso a propiedades
console.log(person.name);
console.log(person.age);
console.log(person.alias);

//Notacion con corchetes
console.log(person["name"]);
console.log(person["age"]);
console.log(person["alias"]);

//Modificaciion de prpiedades
person.name="Fernando Alonso";
console.log(person.name);

//Eliminar prpiedades
delete person.alias;
console.log(person);

//Metodos
let person2={
    name: "Fernando",
    age: 23,
    alias: "Ferni",
    saludar: function(){
        console.log("Hola, soy "+this.name);
    }
}
person2.saludar();

//anidacion de objetos
let person3={
    name: "Fernando",
    age: 23,
    alias: "Ferni",
    address:{
        street: "Calle Falsa",
        number: 123,
        city: "Madrid"
    }
}
console.log(person3.address.street);
console.log(person3.address.number);
console.log(person3.address.city);

