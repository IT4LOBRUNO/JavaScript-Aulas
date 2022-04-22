const imprimirResultado = function(nota){
    if(nota>=7){
        console.log('Aprovado')
    }else{
        console.log('Reprovado')
    }
}
imprimirResultado(10)
imprimirResultado(5)
imprimirResultado('Epa!')//nesse caso, qualquer sentença diferente de >=7 é false