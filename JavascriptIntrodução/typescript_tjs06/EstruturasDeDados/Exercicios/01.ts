import { Queue } from "../Queue";
const leia = require('readline-sync')

const fila = new Queue<string>();

let opcao: string;

do {
    console.log("\n***************************");
    console.log("1 - ADICIONAR CLIENTE NA FILA");
    console.log("2 - LISTAR TODOS OS CLIENTES");
    console.log("3 - RETIRAR CLIENTE DA FILA ");
    console.log("0 - SAIR");
    console.log("*****************************");

    const input = leia.question("Digite opção desejada: ")
    opcao = input ? input : "0";

    switch(opcao){
        case "1":
            const nome = leia.question("Digite o nome do cliente: ");
            if(nome) {
                fila.enqueue(nome);
                console.log(`Cliente ${nome} adicionado a fila`);
            }else{
                console.log("Nome invalido, Tente novamente");
            }
            break;
        
        case "2":
            if(fila.isEmpty()) {
                console.log(`A fila esta vazia`);
            }else{
                console.log("Cliente na fila");
                fila.printQueue();
            }
            break;

        case "3":
            const clienteRemovido = fila.dequeue();
            if(clienteRemovido) {
                console.log(`Cliente ${clienteRemovido} foi removido`);
            }else{
                console.log("A fila esta vazia, Não há clientes para retirar");
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

