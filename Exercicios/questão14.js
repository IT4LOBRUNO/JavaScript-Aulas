function objParaArray(obj){
    chave = Object.keys(obj)
    const resultado = chave.map(chave=>[chave, obj[chave]])
    return resultado
}
console.log(objParaArray({a:1, b:2}))