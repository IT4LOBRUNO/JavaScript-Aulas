function soBoaNoticia (nota){
    if(nota>=7){
        console.log('Aprovado com nota: ' + nota)
    }
}
soBoaNoticia(8)
soBoaNoticia(6.1)

function seForVerdadeEuFalo(valor){
    if(valor){
        console.log('É verdade...' + valor)
    }
}
seForVerdadeEuFalo()
seForVerdadeEuFalo(null)// false
seForVerdadeEuFalo(undefined)// false
seForVerdadeEuFalo('')// string vazia é false
seForVerdadeEuFalo(0)// 0 é false

seForVerdadeEuFalo(-1)// números diferentes de 0 são true
seForVerdadeEuFalo('0')// string preenchida é true
seForVerdadeEuFalo([])// array vazio ou com elementos é true
seForVerdadeEuFalo([1, 2])// array vazio ou com elementos é true
seForVerdadeEuFalo({})//objeto vazio ou preenchido é true