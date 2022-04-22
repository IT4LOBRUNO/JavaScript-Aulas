function somaArray(array){
    resultado = 0
    for(i=0; i<array.length;i++)
    resultado = resultado + array[i]
    return resultado
}
console.log(somaArray([15, 15, 15, 15]))