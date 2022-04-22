function multiplicaPorTres(a,b,c,d){
    let mensagem = [a,b,c,d]
    let resultado = []
    for(var indice = 0; indice<mensagem.length; indice++)
    resultado.push(mensagem[indice]*3)
    return resultado
}
console.log(multiplicaPorTres(1,6,9,23))