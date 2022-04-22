//pessoa -> 123 -> {..}
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa <- 456 -> {...}
//pessoa = {nome: 'Ana'}

Object.freeze(pessoa)

pessoa.nome = 'Lucas'
pessoa.end = 123
delete pessoa.nome
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'Maria'})
pessoaConstante.nome = 'Sara'
console.log(pessoaConstante)