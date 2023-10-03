// IMC
// mostrar a seguinte mensagem 
// Nome da pessoa tem XX anos, pesa xxx KG
// tem XXX de altura e seu IMC é de XXXX

const nomePessoa = 'Rafael A.R da Rosa';
const idadePessoa = 34;
const alturaPessoa = 1.75;
let peso = 130;

let imc = peso / alturaPessoa ** 2

console.log(`${nomePessoa} tem ${idadePessoa} anos, pesa ${peso} KG e tem ${alturaPessoa} de altura e seu IMC é de ${imc}`);