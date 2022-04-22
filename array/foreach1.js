const pessoas = ['Ana', 'Bruno', 'Carlos', 'Daniel']

pessoas.forEach(function(nome, indice, array){
    console.log(`${indice + 1}) ${nome}, do array ${array}`)
})

pessoas.forEach(nome => console.log(nome))

const exibirPessoas = n => console.log(n)
pessoas.forEach(exibirPessoas)