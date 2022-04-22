function paresIndicePar(array){
    resultado = []
    for(i=0; i<array.length; i++)
    if(array[i]%2==0&& i%2==0)
        resultado.push(array[i])
        return resultado
    
}
console.log(paresIndicePar([1,2,3,4,5,6,7,8,9,10]))
console.log(paresIndicePar([10, 70, 22, 43]))
console.log(paresIndicePar([2,1,2,1,4,1,6,2,4,6,8]))