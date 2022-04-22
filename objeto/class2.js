class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor (sobrenome, profissao = 'Professor') {
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super("Silva", "Aluno")
    }
}
const filho = new Filho
const pai = new Pai ("Silva")
console.log(pai)
console.log(filho)