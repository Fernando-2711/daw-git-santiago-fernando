
function mayor(array){
    let max=0;
    for(i=0;i<array.length;i++){
        if(array[i]>max){
            max=array[i];
        }
    }
    return max;
}
console.log(mayor([-3,-4,-5]));



let obj ={
    nombre: "Fernando",
    edad: 30,
    ciudad: "Madrid"
}
console.log(obj.nombre);
console["log"](obj["edad"]);

obj.curso = "DAW";
console.log(obj.curso);

delete obj.ciudad;
console.log(obj);

obj.funcion = function name(param) {
    console.log("Hola");
}
obj.funcion();

for (let value in obj){
    console.log(value);
}

let obj2 = {
    nombre: "Maria",
    edad: 25,
    ciudad: "Barcelona",
    trabajo: {
        profesion: "Diseñadora",
        empresa: "Design Studio"
    }
}
console.log(obj2.trabajo.profesion);
console.log(obj2.trabajo.empresa);

console.log(obj === obj2);
console.log(obj.nombre === obj2.nombre);







