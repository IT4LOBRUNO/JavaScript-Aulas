let valor; // não definida
console.log(valor);
// console.log(valor2); valor2 is not defined

valor = null; // ausencia de valor
console.log(valor);
// console.log(valor.toString()); não pode ler, pois nao tem valor ERRO!

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.5;
console.log(produto);

produto.preco = undefined //evite atribuir undefined
console.log(produto);
console.log(!!produto.preco); // boolean
delete produto.preco; //deletar o valor
console.log(produto);
produto.preco = null; // sem preco
console.log(produto);