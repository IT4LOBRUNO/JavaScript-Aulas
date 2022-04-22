function bhaskara (ax2, bx, c){
    delta = (bx ** 2) - (4 * ax2 * c)
    if( delta < 0){
        console.log("Delta é Negativo: " + delta)
    } else {
        console.log(`x¹:${x = (- bx + Math.sqrt(delta)) / 2 * ax2} ` + `x²:${x = (- bx - Math.sqrt(delta)) / 2 * ax2}`)}
}
bhaskara(3, 1, 2)
bhaskara(1, 3, 2)