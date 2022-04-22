function inverso(valor){
    if(typeof valor == "boolean"){
        console.log(!valor)
    }else if(typeof valor == "number"){
        console.log(valor * -1)
    }else{
        console.log("Boolean ou números esperados, mas o parâmetro é uma String")
    }
}
inverso(-2000)