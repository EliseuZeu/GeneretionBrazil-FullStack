/*Elabore um algoritmo que leia o Salário Bruto, o Adicional Noturno, as Horas Extras e os Descontos de um Colaborador e exiba na tela o Salário Líquido.
Veja o exemplo abaixo:

ENTRADA
SAÍDA

Salário Bruto: 2000.00

Adicional Noturno: 500.00

Horas Extras: 100.00

Descontos: 200.00



Salário Líquido: 2800.00


SALÁRIO LÍQUIDO = SALÁRIO BRUTO + ADICIONAL NOTURNO + (HORAS EXTRAS * 5) - DESCONTOS
 */

const leia = require("readline-sync");

let salarioBruto, adicionalNoturno, horasExtras, descontos, salarioLiquido

salarioBruto = leia.questionFloat("Digite o seu salario: ");
adicionalNoturno = leia.questionFloat("Digite adicional noturno: ");
horasExtras = leia.questionFloat("Digite as horas extras: ");
descontos = leia.questionFloat("Digite descontos: ");

function calcularSalarioLiquido(salarioLiquido) {
    return salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos;
}

console.log(`            Seu salario é: ${salarioBruto}
            Seu adicional noturno e: ${adicionalNoturno}
            Suas horas extras é: ${horasExtras}
            Descontos no salario: ${descontos}
            ==========================
            Salario liquido = ${new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(calcularSalarioLiquido(salarioLiquido))}
    `);


