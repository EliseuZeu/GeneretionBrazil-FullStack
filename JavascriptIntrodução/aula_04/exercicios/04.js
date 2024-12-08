const leia = require('readline-sync') // constante recebendo require do readline biblioteca

let meuArray = new Array(10);
let indicesImpares = [];
let numerosPares = [];
let soma = 0;

for(let contador = 0; contador <= 9; contador++) {
    meuArray[contador] = leia.questionInt(`Digite o numero ${contador + 1}: `);
}


//soma todos os indices dentro do vetor
for(contador = 0; contador < meuArray.length; contador++){
    soma = soma + meuArray[contador];

    if(contador % 2 !== 0) {
        indicesImpares.push(meuArray[contador]);
    }
    
    if(contador % 2 === 0) {
        numerosPares.push(meuArray[contador]);
    }
}

let media = soma / meuArray.length;

console.log(`A media e ${media}`);
console.log(`A soma e ${soma}`);
console.log(`Os numeros Impares são = ${indicesImpares.join(",")}`);
console.log(`Os numeros Pares são = ${numerosPares.join(",")}`);


