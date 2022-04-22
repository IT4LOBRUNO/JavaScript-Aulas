// Array é um Objeto
console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])
console.log(aprovados.length)

aprovados[3] = 'Paulo'
console.log(aprovados)
aprovados.push('João')
console.log(aprovados)
aprovados[9] = 'Lucas'
console.log(aprovados)

console.log(aprovados.length)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados)
aprovados.splice(2, 1, 'Elemento 1', 'Elemento 2')
console.log(aprovados)