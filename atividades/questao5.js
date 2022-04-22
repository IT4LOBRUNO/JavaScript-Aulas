(function(valor) {
    valorEmReais = `R$ ${valor.toFixed(2).replace(".", ",")}`
    console.log(valorEmReais)
})(0.1+0.2)
