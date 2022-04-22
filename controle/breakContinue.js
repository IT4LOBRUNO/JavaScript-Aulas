const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let i in numeros) {
    if(i == 5) {
        break
    }
    console.log(`${i} = ${numeros[i]}`)
}

for(y in numeros){
    if(y == 5){
        continue
    }
    console.log(`${y} = ${numeros[y]}`)
}

externo:
for (a in numeros) {
    for(b in numeros){
        if( a == 2 && b ==3) break externo
        console.log(`Par ${a}, ${b}`)
    }
}

console.log("Fim!")// Não use isso, deixa o codigo bagunçado