const leia = require("readline-sync"); // importando readline para leitura dados do usuario.

let item, quantidade;

console.log("|================ESCOLHA O PRODUTO===================|");
console.log("|Código do Produto |      Produto    | Preço Unitário|");
console.log("|----------------------------------------------------|");
console.log("|       1          | Cachorro Quente |    R$ 10.00   |");
console.log("|----------------------------------------------------|");
console.log("|       2          |    X-salada     |    R$ 15.00   |");
console.log("|----------------------------------------------------|");
console.log("|       2          |    X-Bacon      |    R$ 18.00   |");
console.log("|----------------------------------------------------|");
console.log("|       4          |     Bauru       |    R$ 12.00   |");
console.log("|----------------------------------------------------|");
console.log("|       5          |   Refrigerante  |    R$ 8.00    |");
console.log("|----------------------------------------------------|");
console.log("|       6          | Suco de laranja |    R$ 13.00   |");
console.log("|--------------------------------------------------- | \n");

item = leia.questionInt("|------------------Digite o codigo: ");
quantidade = leia.questionInt("|------------------Digite o quantidade: ")



switch (item) {
    case 1:
        console.log(`| ${item} - Cachorro quente | Quantidade: ${quantidade} |    Valor Total: ${new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(quantidade * 10.00)
        }   |`);
        break;
    case 2:
        console.log(`| ${item} - X-salada  | Quantidade: ${quantidade} |    Valor Total: ${new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(quantidade * 15.00)
        }   |`);    
        break;
    case 3:
        console.log(`| ${item} - X-Bacon | Quantidade: ${quantidade} |    Valor Total: ${new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(quantidade * 18.00)
        }   |`);
        break;
    case 4:
        console.log(`| ${item} - Bauru | Quantidade: ${quantidade} |    Valor Total: ${new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(quantidade * 12.00)
        }   |`);    
        break;
    case 5:
        console.log(`| ${item} - Refrigerante  | Quantidade: ${quantidade} |    Valor Total: ${new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(quantidade * 8.00)
        }   |`);
        break;
     case 6:
        console.log(`| ${item} - Suco de laranja | Quantidade: ${quantidade} |    Valor Total: ${new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(quantidade * 13.00)
        }   |`);    
        break;    
    default:
        console.log("Codigo não existe digite novamente.");
        
        break;
}


