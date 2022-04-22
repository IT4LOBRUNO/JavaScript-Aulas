const valores = [7, 7.8 , 35 , "oi"];
console.log(valores[0], valores[3]);
console.log(valores.length);
valores[4] = 10;
console.log(valores);

valores.push({id:3}, false, null, "teste");
console.log(valores);

console.log(valores.pop()); // Tirar um elemento do Array
delete valores[0]; // Deletar um elemento do Array
console.log(valores);

console.log(typeof valores);