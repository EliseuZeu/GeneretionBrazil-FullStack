import { Stack } from "../Stack";
const leia = require('readline-sync')

const pilha = new Stack<number>();




let opcao: string;

do {
    console.log("\n***************************");
    console.log("1 - ADICIONAR LIVRO NA PILHA");
    console.log("2 - LISTAR TODOS OS LIVRO");
    console.log("3 - RETIRAR CLIENTE DA LIVRO ");
    console.log("0 - SAIR");
    console.log("*****************************");

    const input = leia.question("Digite opção desejada: ")
    opcao = input ? input : "0";

    switch(opcao){
        case "1":
            const nome = leia.question("Digite o nome do Livro: ");
            if(nome) {
                pilha.push(nome);
                console.log(`Livro ${nome} adicionado a pilha`);
            }else{
                console.log("Livro não existe, Tente novamente");
            }
            break;
        
        case "2":
            if(pilha.isEmpty()) {
                console.log(`A pilha esta vazia`);
            }else{
                console.log("Livro na pilha");
                pilha.printStack();
            }
            break;

        case "3":
            const clienteRemovido = pilha.pop();
            if(clienteRemovido) {
                console.log(`Livro ${clienteRemovido} foi removido`);
            }else{
                console.log("A pilha esta vazia, Não há Livro para retirar");
            }
            break;

        case "0":
            console.log("Encerrando o programa");
            break;
        
        default:
            console.log("Opão invalida! Tente novamente");
            break;
            
    }
} while (opcao !== "0");

