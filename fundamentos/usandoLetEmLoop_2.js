const funcs = [];

for (let i = 0; i<10; i++){ // Var sempre imprimi o ultimo resultado
    funcs.push(function(){
        console.log(i)
    })
}
funcs[2]()
funcs[8]()