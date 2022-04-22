Array.prototype.forEach2 = function(callback){
    for(i=0; i<this.length; i++){
        callback(this[i], i, this)
    }
}

const pessoas = ['Ana', 'Bruno', 'Carlos', 'Daniel']
pessoas.forEach2(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})