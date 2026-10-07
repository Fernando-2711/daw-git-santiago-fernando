//Clases
class Person{
    constructor(name, age, city){
        this.name = name;
        this.age = age;
        this.city = city;
    }
}

let person = new Person("Fernando", 18, "Malaga");


//Prpiedades privadas
class PrivatePerson {
    #dni
    constructor(name, age,dni) {
        this._name = name;
        this._age = age
        this.#dni= dni;
    }

    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }
    mosDni(){
        this.#dni
    }
}

class cuentaBancaria {
    //Declaracion obligatoria en el cuerpo de la clase
    #saldo;
    constructor(saldo) {
        this.#saldo = saldo;
    }
    
    get saldo() {
        return this.#saldo;
    }

    depositar(cantidad) {
        if (cantidad > 0) {
            this.#saldo += cantidad;
        } else {
            console.log("La cantidad a depositar debe ser positiva.");
        }
    }
}
let cuenta = new cuentaBancaria(1000);
console.log(cuenta.saldo);
cuenta.saldo = 2000;
console.log(cuenta.saldo);
cuenta.depositar(500);
console.log(cuenta.saldo);