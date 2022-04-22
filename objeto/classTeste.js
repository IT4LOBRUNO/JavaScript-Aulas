class avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class pai extends avo{
    constructor(sobrenome, trabalho = 'Professor'){
        super(sobrenome)
        this.trabalho = trabalho
    }
}
class filho extends pai{
    constructor(){
        super('Silva', 'Aluno')
    }
}

const filho1 = new filho
console.log(filho1)
const pai1 = new pai('Costa', 'Barbeiro')
console.log(pai1)

class Pandeiro{
    constructor(som, instrumento = 'Musical'){
    this.som = som
    this.instrumento = instrumento
}
}

const pandeiro = new Pandeiro('Bonito', 'Pagode')
console.log(pandeiro)