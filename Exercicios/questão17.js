function despesas(obj){
    var precoFinal = 0
    const resultado = obj.map(a=>a.preco)
    for(i=0;i<resultado.length;i++)
    precoFinal += resultado[i]
    return precoFinal
}

console.log(despesas([{nome: "Caneta", preco: 50.00},
{nome: "Jornal", preco: 69.90},
{nome:"Carro", categoria: "informação", preco: 57.9}]))