function remove(obj, deleta){
    const copia = Object.assign({}, obj)
    delete copia[deleta]
    return copia
}
console.log(remove({a:1, b:2, c:3}, 'c'))