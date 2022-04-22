function determina(dia){
    switch(dia){
        case 1 :
            return "Fim de semana"
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return "Dia útil"
        case 7:
            return "Fim de semana"
        case 8:
            return "Dia inválido"
    }
}
console.log(determina(1))
console.log(determina(2))
console.log(determina(3))
console.log(determina(4))
console.log(determina(5))
console.log(determina(6))
console.log(determina(7))
console.log(determina(8))
console.log(determina(10))