Array.prototype.forEach3 = function(callback){
    for(i=0; i <this.length; i++){
        callback(this[i], i, this)
    }
}

const ah = ['a', 'b', 'c', 'd', 'e']
ah.forEach3(function(nome, indice, array){
    console.log(`${indice+1}) ${nome} ${array}`)
})