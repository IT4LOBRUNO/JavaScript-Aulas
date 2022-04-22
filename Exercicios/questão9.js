function repetir(elemento, x){
    novoArray = []
    for(i=0; i<x; i++){
    novoArray.push(elemento)}
    return novoArray
}
console.log(repetir("teste", 4))
console.log(repetir(7,3))