/*Implementa una función llamada procesarProductos(productos, callback).

El parámetro productos será un array de objetos con esta estructura:

const productos = [
    { nombre: "Teclado", precio: 30 },
    { nombre: "Ratón", precio: 15 },
    { nombre: "Monitor", precio: 200 }
];

La función debe calcular el precio total de todos los productos y pasar el
resultado al callback.

El callback recibirá dos parámetros:

1. El precio total.
2. La cantidad de productos procesados.

Ejemplo:

procesarProductos(productos, (total, cantidad) => {
    console.log(`Se han procesado ${cantidad} productos`);
    console.log(`El precio total es ${total} euros`);
});

Resultado esperado:

Se han procesado 3 productos
El precio total es 245 euros

Utiliza también la función con otro callback que calcule y muestre el precio
medio:

procesarProductos(productos, (total, cantidad) => {
    console.log(`El precio medio es ${total / cantidad} euros`);
});

Requisitos:

- procesarProductos debe recibir y utilizar un callback.
- El callback debe ejecutarse después de calcular los datos.
- La función debe funcionar con cualquier array de productos.
- No se debe escribir el mensaje directamente dentro de
  procesarProductos.*/

const productos=[{nombre:"Teclado",precio:30},{nombre:"Ratón",precio:15},{nombre:"Monitor",precio:200}];

function procesarProductos(productos,callback){
    const total=productos.reduce((acu,ini)=>acu+ini.precio,0);
    const cantidad=productos.length;
    callback(total,cantidad);
}

procesarProductos(productos,(total,cantidad)=>{
    console.log(`Se han procesado ${cantidad} productos`);
    console.log(`El precio total es ${total} euros`);
});

procesarProductos(productos, (total, cantidad) => {
    console.log(`El precio medio es ${total / cantidad} euros`);
});
