function primeiroEUltimo(array){
    novoArray= []
    novoArray.push(array[0])
    novoArray.push(array[array.length-1])
    return novoArray
}
console.log(primeiroEUltimo(["sim", 1, 0, 2, "não"]))
console.log(primeiroEUltimo([7, 1, 0, 2, 7]))
console.log(primeiroEUltimo([-100, "aplicativo", 16]))