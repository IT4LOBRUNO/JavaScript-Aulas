function dobraVetor(x){
    vetor = []
    vetor.push(x)
    for(i=1;i<=10;i++){
        vetor.push((vetor[i-1])*2)
        console.log(`N[${i-1}] = ${vetor[i-1]}`)
    }
}
dobraVetor(50)