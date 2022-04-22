function simples (c, i, t){
    montante = c + (c * i * t)
    console.log(montante)
}
simples(100, 0.1, 2)

function composto(c, i, t){
    montante = c * (1 + i) ** t
    console.log(montante.toFixed(2))
}
composto(100, 10/100, 2)