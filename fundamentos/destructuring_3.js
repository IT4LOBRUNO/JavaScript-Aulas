function rand({min = 0, max = 1000}) {
    const valor = Math.random() * ( max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40}
console.log(rand(obj))

console.log(rand({ min:955}))

console.log(rand({}))

console.log(rand({ min:2000})) // nesse caso 'min' e 'max' são apenas intervalos
// console.log()) Não funciona, pois não tem objeto para desestruturar