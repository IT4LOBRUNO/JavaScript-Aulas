function buscarPalavras(busca, letras) {
    const resultado = []
    for (palavras of letras)
    if (palavras.includes(busca))
    resultado.push(palavras)
    return resultado
}
console.log(buscarPalavras("pro", ["professor", "aluno", "profissional", "antiprofissionalismo"]))