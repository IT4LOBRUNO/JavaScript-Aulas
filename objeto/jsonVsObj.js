const obj = {a: 1, b: 2, c: 3, soma() {return a + b + c} }
console.log(JSON.stringify(obj))

// console.log(JSON.parse("{a: 1, b: 2, c: 3}"))
/*JSON pode gerar um Objeto a partir de um texto com ASPAS SIMPLES
para o texto e ASPAS DUPLAS para os atributos*/
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))

console.log(JSON.parse('{"a": 1.7, "b": "String", "c": true, "d": []}'))