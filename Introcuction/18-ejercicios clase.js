
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










