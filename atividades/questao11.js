function anobissexto (ano) {
    if(ano <=0) {
        console.log(false)
    }else if(ano % 400 ==0) {
        console.log(true)
    } else if (ano % 100 == 0){
        console.log(false)
    }else if(ano % 4 == 0) {
        console.log(true)
    }else{
        console.log(false)
    }
}
anobissexto(400)
anobissexto(100)
anobissexto(4)
anobissexto(800)
anobissexto(200)
anobissexto(12)
anobissexto(8)
anobissexto(104)
anobissexto(5)