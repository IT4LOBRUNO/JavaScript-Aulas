function Aula (nome, video) {
    this.nome = nome
    this.video = video
}

const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('teste', 456)
console.log(aula1, aula2)

//Simulando Operador new

function novo (f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    console.log(obj)
    return obj
}

const aula3 = novo(Aula, 'Ola', 12)
const aula4 = novo(Aula, 'Até', 14)

console.log(aula3, aula4)

novo(Aula, 'Valeu', 8967)