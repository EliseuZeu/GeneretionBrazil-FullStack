/*Desenvolva um algoritmo que leia 3 valores inteiros A, B e C e imprima na tela se a soma de A + B é maior, menor ou igual a C.
*/ 


const leia = require("readline-sync"); // importando readline para leitura dados do usuario.

let A,B,C;

A = leia.questionInt("Digite o valor A: ");
B = leia.questionInt("Digite o valor B: ");
C = leia.questionInt("Digite o valor C: ");

if ((A + B) >= C){
    console.log(`A soma de ${A} + ${B} e maior ou igual a ${C}`);
} else {
    console.log(`A soma de ${A} + ${B} e menor que ${C}`);
}
