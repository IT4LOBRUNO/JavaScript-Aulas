function menorNumero(array){
    menor = array[0]
    for(i=0;i<array.length;i++)
    if(menor>array[i]){
    menor=array[i]}
    return menor
}
console.log(menorNumero([5, -15, 50, 3]))