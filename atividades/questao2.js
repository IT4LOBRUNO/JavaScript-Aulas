function triangulo(a, b, c) {
    if(a === b && b === c){
        console.log('Equilátero')
    } else if( a===b || b===c || c===a){
        console.log('Isósceles')
    } else{
        console.log('Escaleno')
    }
}
triangulo(3, 3, 3)
triangulo(3, 5, 3)
triangulo(3, 5, 5)
triangulo(3, 5, 4)