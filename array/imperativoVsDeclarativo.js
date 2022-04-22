const alunos = [
    {nome: 'João', nota: 7.9},
    {nome: 'Maria', nota: 9.2},
    {nome: 'Lucas', nota: 8.5}
]

//Imperativo
let total1 = 0
for(i = 0; i<alunos.length; i++){
    total1 += alunos[i].nota
}
console.log(total1/alunos.length)

//Declarativo
const  getNota = aluno=>aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2/alunos.length)

//select codigo, nome, email from clientes where ativo = 1