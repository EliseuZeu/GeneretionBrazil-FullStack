/* Escreva um algoritmo, que leia 2 números inteiros via teclado, onde o primeiro número deve ser menor do que o segundo número.
Caso contrário, deve ser exibida uma mensagem na tela informando que o intervalo é inválido e sair do programa. 
No intervalo informado, mostre na tela todos os números que são múltiplos de 3 e 5. Veja os exemplos abaixo:
*/
const leia = require('readline-sync') // constante recebendo require do readline biblioteca improtada 

// Variáveis para armazenar a contagem de pares e ímpares
let pares = 0;
let impares = 0;

// Laço FOR para ler 10 números
for (let i = 1; i <= 10; i++) {
    const numero = leia.questionInt(`Digite o ${i}º número:`); // Solicita o número ao usuário
    
    if (numero % 2 === 0) {
        pares++; // Incrementa a contagem de pares
    } else {
        impares++; // Incrementa a contagem de ímpares
    }
}

// Exibe o total de números pares e ímpares
console.log(`Total de números pares: ${pares}`);
console.log(`Total de números ímpares: ${impares}`);