const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true},
    {nome: 'Lucas', nota: 8.5, bolsista: false}
]

// Desafio 1: Todos os Alunos são bolsistas?
// Desafio 2: Algum aluno é bolsista?
const resultado = alunos.map(a=>a.bolsista).reduce(function(acumulador, atual){
    return acumulador + atual
})
if(resultado == alunos.length){
    console.log("Todos os alunos são bolsistas")
}else if(resultado>0||resultado<alunos.length){
    console.log(resultado + " alunos são bolsistas")
}else{
    console.log("Nenhum aluno é bolsista")
}