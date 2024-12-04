/*Escreva um algoritmo que leia um número inteiro via teclado e mostre na tela uma mensagem indicando
se este número é par ou ímpar e se o número é positivo ou negativo. Veja os exemplos abaixo:
*/ 

const leia = require("readline-sync"); // importando readline para leitura dados do usuario.

let numero; // declarando variavel

numero = leia.questionInt("Digite o valor desejado: "); // adicionando comando do usuario na variavel

// Verificando se o numero e positivo ou negativo
if(numero >= 0) { 
    if (numero % 2 == 0){ // verifica se e impar o u par 
        console.log(`O numero ${numero} e par e positivo`);
    } else{
        console.log(`O numero ${numero} e impar e positivo`);
    }
}else{
    if (numero % 2 == 0){ // verifica se e impar ou par
        console.log(`O numero ${numero} e par e negativo`);
    } else{
        console.log(`O numero ${numero} e impar e negativo`);
    }
}