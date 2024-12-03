const leia = require('readline-sync')

let salario, abono


salario = leia.questionFloat("Digite o salario seu salario: "); // variavel que recebe a entrada do usuario no caso salario
abono = leia.questionFloat("Digite o Abono salarial: ") // variavel que recebe a entrada do usuario no caso Abono

function calcularNovoSalario(salario , abono){  // função retorna o valor do salario e abono calculado retornando o novo salario de acordo com novos parametros
    return novoSalario = salario + abono; // retorno da função novo salario
}

console.log("Seu novo salario e: ", new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(calcularNovoSalario(salario,abono))); // saida de dos dados do novo salario.


