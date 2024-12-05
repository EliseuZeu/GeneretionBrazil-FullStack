const leia = require('readline-sync')

let numero = leia.questionInt("Digite um numero: ");

for(let i = 0; i <= 10; i++){
    console.log(`${numero}X${i}= ${numero * i}`);
}

