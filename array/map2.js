const carrinho = [
    '{"nome": "Borracha", "Preco": 3.45}',
    '{"nome": "Caderno", "Preco": 13.90}',
    '{"nome": "Kit de Lapis", "Preco": 41.22}',
    '{"nome": "Caneta", "Preco": 7.50}'
]

//Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json)
const preco = produto => produto.Preco

const resultado = carrinho.map(paraObjeto).map(preco)
console.log(resultado)