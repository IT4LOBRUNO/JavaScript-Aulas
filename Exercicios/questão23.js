function caracteres(a, string){
    const letras = string.split("")
    var resultado = 0
    for(i=0; i<letras.length; i++)
    if(a===letras[i]){
        resultado = resultado + 1
    }
    return resultado
}
console.log(caracteres("r", "A sorte favorece os audazes"))
console.log(caracteres("c", "Conhece-te a ti mesmo"))