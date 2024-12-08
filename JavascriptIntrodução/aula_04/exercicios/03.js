const leia = require('readline-sync') // constante recebendo require do readline biblioteca

let contador = 0;
let numero;

do {
  numero = leia.questionInt("Digite um número: ");
  
  if (numero % 3 === 0 && numero !== 0) {
    soma += numero;
    contador++;
  }
} while (numero !== 0);

if (contador > 0) {
  let media = soma / contador;
  console.log(`A média de todos os números múltiplos de 3 é: ${media.toFixed(2)}`);
} else {
  console.log("Nenhum número múltiplo de 3 foi digitado.");
}