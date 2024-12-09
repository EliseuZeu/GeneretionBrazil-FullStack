
let numeros: Set<number> = new Set([2, 5, 1, 3, 4, 9, 7, 8, 10, 6]);


let numerosArray = Array.from(numeros);

let numero: number = Number(prompt("Digite o número que você deseja encontrar:"));


let indice = numerosArray.indexOf(numero);


if (indice !== -1) {
    console.log(`O número ${numero} está localizado na posição: ${indice}`);
} else {
    console.log(`O número ${numero} não foi encontrado!`);
}
