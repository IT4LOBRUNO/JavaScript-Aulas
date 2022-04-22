// Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3);
imprimirSoma("tudo", "Junto");
imprimirSoma(1, 2, 3, 4, 5);

imprimirSoma(2);
imprimirSoma();

//Funcao com retorno

function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3));
console.log(soma(2));