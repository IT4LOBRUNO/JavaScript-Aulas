const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
console.log(pilotos)

pilotos.pop() // remove o último elemento do array
console.log(pilotos)

pilotos.push('Verstappen') //Adiciona um elemento na última posição do array
console.log(pilotos)

pilotos.shift(pilotos) // remove da primeira posição do array
console.log(pilotos)

pilotos.unshift('Hamilton') //adiciona um elemento na primeira posição do array
console.log(pilotos)

pilotos.splice(2, 0, 'Bottas', 'Massa')// splice remove ou adiciona
console.log(pilotos)

pilotos.splice(3, 1)//splice remove ou adiciona
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) // adiciona a partir do indice de um array existente
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(2, 4)
console.log(algunsPilotos2)

const algunsPilotos3 = pilotos.slice()
console.log(algunsPilotos3)

/*splice:
splice(elemento que será modificado, elemento que será removido, elemento que será adicionado)
1 indice onde será modificado
2 indice quantos serão excluídos
3 indice quais serão adicionados
*/