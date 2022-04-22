Array.prototype.filter2 = function(callback){
    const newArray = []
    for(i=0; i<this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}


const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome:'IPad', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome:'Copo de plástico', preco: 18.99, fragil: false}
]

console.log(produtos.filter2(function(p){
    return p.fragil == true
}))

const caro = produto=> produto.preco >=500
const fragil = produto=>produto.fragil == true // ==true não é necessário pois ele já inicia como true, para false é necessário

console.log(produtos.filter2(caro).filter2(fragil))