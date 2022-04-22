let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--)
//estritamente igual (===) é resolvido antes do numx++ ou numx-- pós-fixado
//um ++numx ou --numx (pré-fixado) é resolvido antes, portantanto temos a variação na resposta