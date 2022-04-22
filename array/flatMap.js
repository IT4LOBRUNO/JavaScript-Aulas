const escola = [{
    nome: 'Turma M1',
    alunos:[{
        nome:'Gustavo',
        nota: 8.1
    },{
        nome: 'Gabriel',
        nota: 9.3
    }]},
    {
        nome: 'Turma M2',
        alunos:[{
            nome:'Maria',
            nota: 8.9
        },{
            nome: 'Márcia',
            nota: 7.3
        }]
    }]

    const getNotaDoAluno = aluno =>aluno.nota
    const getNotaTurma = turma=>turma.alunos.map(getNotaDoAluno)
    
    const notas1 = escola.map(getNotaTurma)
    
    Array.prototype.flatMap = function(callback){
        return Array.prototype.concat.apply([], this.map(callback))
    }
    const notas2 = escola.flatMap(getNotaTurma)
    console.log(notas2)