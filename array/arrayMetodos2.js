const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop()//Remove o último elemento
console.log(pilotos)

pilotos.push('Vestappen')//adiciona um elemento na última posição do array
console.log(pilotos)

pilotos.shift()//remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton')//adiciona um elemento na primeira posição do array
console.log(pilotos)

pilotos.splice(2,0, 'Massa')//splice mexe em um índice escolhido
console.log(pilotos)
/*aprimeira posição escolhe o índice
a segunda posição deleta um número x a partidr daquele índice
a terceira opção adiciona um novo elemento naquele indice*/

const algunsPilotos= pilotos.slice(2) //cria um novo array a partir do indice selecionado no outro array
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1,3)
console.log(algunsPilotos2)