let statusCarro = "Desligado"
let aceleracao = 0
let rotacaoDoVolante = 0

function ligarDesligar(){
    if(statusCarro === "Desligado"){
        statusCarro = "Ligado"
    } else {statusCarro = "Desligado"}
    return statusCarro
}

function acelerar(incremento){
    aceleracao = aceleracao + incremento
    return "Velocidade: " + aceleracao + "M/s²"
}

function frear(decremento){
    aceleracao = aceleracao - decremento
    return "Velocidade: " + aceleracao + "M/s²"
}

function girarVolante(angulo){
    rotacaoDoVolante = angulo
    return rotacaoDoVolante + "º"
}

console.log(ligarDesligar())
console.log(acelerar(30))
console.log(acelerar(20))
console.log(girarVolante(45))
console.log(frear(40))
console.log(frear(10))
console.log(girarVolante(0))
console.log(ligarDesligar())