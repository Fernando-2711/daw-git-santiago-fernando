
function comun(array1, array2){
    let resultado = [];
    for(i=0;i<array1.length;i++){
        if(array2.includes(array1[i])){
            resultado.push(array1[i]);
        }
    }
    return resultado;
}
let arr1= [1,2,3,4];
let arr2= [3,4,5,6];
console.log(comun(arr1,arr2))