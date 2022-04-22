// __proto__ acessar o prototipo
const ferrari = {
    modelo: 'F40',
    velMax: 240
}

const volvo = {
    modelo: 'A4',
    velMax: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)