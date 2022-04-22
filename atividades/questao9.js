function notaEscola (nota) {
    let notaFinal = correcao(nota)
    if(notaFinal >= 40) {
        console.log("Aprovado com " + notaFinal)
    } else {
    console.log("Reprovado com " + notaFinal)
    }
}
function correcao(nota){
    if (nota % 5 > 2) {
        return nota + (5 - (nota %5))
    } else {
        return nota
    }
    
}
notaEscola(76)
notaEscola(38)
notaEscola(28)
notaEscola(80)
notaEscola(89)
notaEscola(87)