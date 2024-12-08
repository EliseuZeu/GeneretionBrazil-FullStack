// Inicializa a variável para armazenar a soma
const leia = require('readline-sync') // constante recebendo require do readline biblioteca improtada 
let soma = 0;
let numero;

// Executa o bloco pelo menos uma vez
do {
    numero = leia.questionInt("Digite um número (0 para sair):");

    if (numero > 0) {
        soma += numero;
    }
} while (numero !== 0); // Continua enquanto o número for diferente de 0


console.log(`A soma dos números positivos é: ${soma}`);