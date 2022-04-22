function criarProduto(nome, preco) {
    return {
        nome, // nome: nome,
        preco, //preco: preco,
        desconto: 0.1
    }
}

console.log(criarProduto("Carro", 50000.00))
console.log(criarProduto("Moto", 10000.00))
console.log(criarProduto("Notebook", 3999.90))