var mensagem = "The Lord of The Rings";
var resultado = [];
var final = [];
var checar = "o";
for (var indice = 0; indice <= mensagem.length; indice++){
    resultado.push(mensagem[indice]);
    if (resultado === checar){
        final.push(checar[0])
    }
    
}
console.log(final);