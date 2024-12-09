import readlinesync = require('readline-sync')

let numero1: number;
let numero2: number;

numero1 = readlinesync.questionFloat('Digite o primeiro numero: ')

numero2 = readlinesync.questionFloat('Digite o segundo numero: ')

console.log("A Soma dos 2 números é igual a ", numero1 + numero2)
console.log("A Subtração dos 2 números é igual a ", numero1 - numero2)
console.log("A Multiplicação dos 2 números é igual a ", numero1 * numero2)
console.log("A Divisção dos 2 números é igual a ", numero1 / numero2)