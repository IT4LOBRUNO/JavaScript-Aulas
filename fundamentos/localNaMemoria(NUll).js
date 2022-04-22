const a ={name: "teste"}; // as constantes possuem o mesmo endereço
const b = a;              // o mesmo local na memoria

console.log(b);

b.name = "opa";

console.log(a);

//com tipos primitivos apenas uma copia é feita

let c = 3; 
let d = c;
d++;
console.log(c);
console.log(d);