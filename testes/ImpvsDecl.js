const alunos = [
    {nome: 'João', nota: 8.5, bolsista: false},
    {nome:'Maria', nota: 9.8, bolsista: true},
    {nome:'Pedro', nota: 7.5, bolsista:false},
    {nome:'Lucas', nota:10, bolsista:true}
]
//Declarativo
const bolsa = alunos=> alunos.bolsista
const getNota = alunos=>alunos.nota
const soma = (total, atual)=> total + atual
const comBolsas = alunos.filter(bolsa)
const resultado = alunos.filter(bolsa).map(getNota).reduce(soma)
console.log(resultado/comBolsas.length)
console.log(comBolsas)