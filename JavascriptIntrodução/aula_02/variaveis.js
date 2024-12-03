//------ VARIÁVEIS ------
let nome = "Josiane";
let profissao = "Pessoa Desenvolvedora";
let salarioBruto = 3500.44;
const bonus = 0.05;

console.log("\nNome: ", nome);
console.log("\nProfissão: ", profissao);

//mudar o formato do número para moeda
console.log(
  "\nSalário liquido: ",
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(salarioBruto + bonus * salarioBruto)
);

console.log("\nO salário bruto do colaborador " + nome + " é " + salarioBruto);

//--- Interpolação de STRING ----
console.log(`\nO salário bruto do colaborador ${nome} é ${salarioBruto}`);

// console.log("\nTipo da variável: ", typeof nome)

// nome = 12

// console.log("\nNome: ", nome)

// console.log("\nTipo da variável: ", typeof nome)
