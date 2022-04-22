console.log('Função Normal(function):')
function compara(param){
    console.log(this === param)
}
compara(global)
compara(this)
console.log('Função Arrow:')
comparaArrow = (param2) => {
    console.log(this === param2)
}
comparaArrow(global)
comparaArrow(this)