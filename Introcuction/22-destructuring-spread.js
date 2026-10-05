
//Desestructuracion

let myArray =[1,2,3,4]

let person = {
    name: "Miguel",
    age:30,
    alias: "Ferna"
}

let myValue = myArray[1]
console.log(myValue)

let myName=person.name
console.log(myName)

let[myValue0, myValue1] = myArray
console.log(myValue0)
console.log(myValue1)

//Ignorar elementos array
let [myvalue11,,,myvalue13] = myArray
console.log(myvalue11)
console.log(myvalue13)

//Desestructuracion de objetos
let {name, age} = person
console.log(name)
console.log(age)


let person2={
    name: "Fernando",
    age:30,
    alias: "Ferna",
    walk :function(){
        console.log("Estoy caminando")
    },
    job: {
        name: "Programador",
        exp: 10,
        work: function () {
            console.log('La persona ${person2.name}tiene ${this.exp} años de experencia como ${this.name}')
        }
    }   
}

let {name: personName, job: {name:jobName}}= person2
console.log(personName)
console.log(jobName)

//Spread operator
let myArray2 = [...myArray, 5,6,7]
console.log(myArray2)

let myArray3= [...myArray]
console.log(myArray3)