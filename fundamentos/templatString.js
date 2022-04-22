const nome = "rebeca";
const concatenacao = "olá " + nome + " !";
console.log(concatenacao);

const template = `
Olá ${nome} !`;
console.log(template);

//expressoes...
console.log(`1 + 1 = ${1+1}`);

const up = texto => texto.toUpperCase();

console.log(`Ei... ${up("cuidado")}!`)