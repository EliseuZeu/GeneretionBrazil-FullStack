const leia = require('readline-sync')

let n1, n2, soma; 

n1 = leia.questionInt("Digite o primeiro numero: ")
n2 = leia.questionInt("Digite o segundo numero: ")

console.log("\nA variavel N1 possui o valor: ", n1)
console.log("\nA variavel N2 possui o valor: ", n2)

//soma = n1 + n2;

console.log("\nA soma de N1 + N2 é igual a: ", n1 + n2)
console.log("\nA subtração de N1 - N2 é igual a: ", n1 - n2)
console.log("\nA multiplicação de N1 * N2 é igual a: ", n1 * n2)
console.log("\nA divisão de N1 / N2 é igual a: ", n1 / n2)
console.log("\nA potenciação de N1 ^ N2 é igual a: ", Math.pow(n1, n2))
console.log("\nA raiz de N1 ^ N2 é igual a: ", Math.sqrt(n1, n2))

//  Math => Biblioteca de funções matemáticas.