function numeros(array){
    novoArray = []
    for(i=0; i<array.length; i++)
    if(typeof array[i] == "number")
    novoArray.push(array[i])
    return novoArray
}
console.log(numeros(["Teste", 2, "ola", 5, true, "22", 27]))