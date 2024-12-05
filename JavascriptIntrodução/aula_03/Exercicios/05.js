const leia = require("readline-sync"); // importando readline para leitura dados do usuario.

let item, nome, salario, reajuste = [0.1, 0.07, 0.09,0.06,0.05,0.08];

console.log("|================ESCOLHA O PRODUTO===================|");
console.log("|  Código do Cargo |      Cargo      |  Porcentagem  |");
console.log("|----------------------------------------------------|");
console.log("|       1          |     Gerente     |       10%     |");
console.log("|----------------------------------------------------|");
console.log("|       2          |     Vendedor    |       7%      |");
console.log("|----------------------------------------------------|");
console.log("|       2          |    Supervisor   |       9%      |");
console.log("|----------------------------------------------------|");
console.log("|       4          |    Motorista    |       6%      |");
console.log("|----------------------------------------------------|");
console.log("|       5          |    Estoquista   |       5%      |");
console.log("|----------------------------------------------------|");
console.log("|       6          |  Técnico de TI  |       8%      |");
console.log("|--------------------------------------------------- | \n");

item = leia.questionInt("|------------------Digite o codigo: ");
nome = leia.question("|------------------Digite o nome do colaborado: ")
salario = leia.questionFloat("|------------------Digite o salario: ")

 



switch (item) {
    case 1:
        console.log(`| Cargo = Gerente | Nome: ${nome} |    Salario: ${new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(salario + (reajuste[1] * salario))
        }   |`);
        break;
    case 2:
        console.log(`| Cargo =  Vendedor  | nome: ${nome} |    Salario: ${new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(salario + (reajuste[2] * salario))
        }   |`);    
        break;
    case 3:
        console.log(`| Cargo = Supervisor | nome: ${nome} |    Salario: ${new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(salario + (reajuste[3] * salario))
        }   |`);
        break;
    case 4:
        console.log(`| Cargo = Motorista | nome: ${nome} |    Salario: ${new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(salario + (reajuste[4] * salario))
        }   |`);    
        break;
    case 5:
        console.log(`| Cargo = Estoquista| nome: ${nome} |    Salario: ${new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(salario + (reajuste[5] * salario))
        }   |`);
        break;
     case 6:
        console.log(`| Cargo = Técnico de TI| nome: ${nome} |    Salario: ${new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(salario + (reajuste[6] * salario))
        }   |`);    
        break;    
    default:
        console.log("Codigo não existe digite novamente.");
        
        break;
}


