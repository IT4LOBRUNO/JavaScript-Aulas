function compras (trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTV50 = trabalho1 && trabalho2
    const comprarTV32 = trabalho1 != trabalho2
    const ficarSaudavel = !comprarSorvete
    return {comprarSorvete, comprarTV50, comprarTV32, ficarSaudavel}
}
console.log(compras (false, false ))