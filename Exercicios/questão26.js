function inverterObj(obj){
    const resultado = {}
    Object.entries(obj).forEach(parChaveValor =>{
        const chave = 0,
        valor = 1
        resultado[parChaveValor[valor]]=parChaveValor[chave]
    })
    return resultado
}

console.log(inverterObj({a:1, b:2, c:3, d:4, e:5}))