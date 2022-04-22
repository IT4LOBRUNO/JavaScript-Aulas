var soma = 50
var resultado = 0
var resultadoFinal=[]
for(i=50; i<=70; i++){
    resultado = soma + i
    if(resultado%2==0){
        resultadoFinal.push(resultado)
    }
}
console.log(resultadoFinal)