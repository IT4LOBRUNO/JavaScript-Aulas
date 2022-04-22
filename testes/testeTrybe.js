function tripleTheChances( chances){
    let resultado = [];
    var chances = [1, 2, 3, 4, 5, 6, 7];
    for (let indice = 0; indice < chances.length; indice++){
        resultado.push (chances[indice] * 3)
        console.log(resultado);
    }
}