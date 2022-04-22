function sorteio(num){
    valor = 0
    var valor = Math.random()*(10-1)+1
    resultado = Math.floor(valor)
    if(resultado === num){
    console.log(`Parabéns! O número sorteado foi ${resultado}`)
    }else{console.log(`Que pena! O número sorteado foi ${resultado}`)}
}
sorteio(1)