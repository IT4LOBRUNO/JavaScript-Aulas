function media(array){
    mediaFinal = 0
    for(i=0; i<array.length; i++)
    mediaFinal += array[i]
    resultado = mediaFinal/array.length
    return resultado
}
console.log(media([0, 10]))
console.log(media([1, 2, 3, 4, 5]))