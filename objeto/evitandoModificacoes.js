//Object.preventExtensions, pode excluir e mudar, mas não pode adicionar

const pessoa = Object.preventExtensions({
    nome: 'Ana',
    idade: 20,
    corCabelo: 'preto'
})
pessoa.pele = 'Branco'
pessoa.nome = 'Carla'
console.log(pessoa)

console.log('Extensivel:', Object.isExtensible(pessoa))
console.log(pessoa.pele)
delete(pessoa.idade)
console.log(pessoa)

//Object.seal é pode mudar, mas nao pode excluir ou adicionar

const pessoa1 = {
    nome: 'Juliana',
    idade: 30
}
Object.seal(pessoa1)
console.log('Selado:', Object.isSealed(pessoa1))

pessoa1.nome = 'Maria'
delete(pessoa1.idade)
console.log(pessoa1)

//Object.freeze nenhuma auteração pode ser feita

const carro = {nome: 'Corsa', cor: 'preto', modelo: 'classic'}
Object.freeze(carro)
carro.nome = 'Celta'
delete carro.cor
carro.idade = 10

console.log('Frozen', Object.isFrozen(carro))
console.log(carro)