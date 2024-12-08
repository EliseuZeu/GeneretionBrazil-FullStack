const leia = require('readline-sync'); // Biblioteca para entrada de dados

// Criando uma matriz de 3x3
let matrizZero = new Array(3);

for (let indiceLinha = 0; indiceLinha < matrizZero.length; indiceLinha++) {
    matrizZero[indiceLinha] = Array(3);
}

// Adicionando valores à matriz
for (let indiceLinha = 0; indiceLinha < matrizZero.length; indiceLinha++) {
    for (let indiceColuna = 0; indiceColuna < matrizZero.length; indiceColuna++) {
        matrizZero[indiceLinha][indiceColuna] = leia.questionInt(`Digite o numero do elemento [${indiceLinha}][${indiceColuna}]: `);
    }
}

// Inicializando variáveis para diagonais
let diagonalPrincipal = [];
let diagonalSecundaria = [];
let somaDiagonalPrincipal = 0;
let somaDiagonalSecundaria = 0;

// Processando as diagonais
for (let i = 0; i < matrizZero.length; i++) {
    // Diagonal Principal
    diagonalPrincipal.push(matrizZero[i][i]);
    somaDiagonalPrincipal += matrizZero[i][i];

    // Diagonal Secundária
    diagonalSecundaria.push(matrizZero[i][matrizZero.length - 1 - i]);
    somaDiagonalSecundaria += matrizZero[i][matrizZero.length - 1 - i];
}

// Exibindo resultados
console.table(matrizZero);
console.log("Elementos da Diagonal Principal:", diagonalPrincipal.join(" "));
console.log("Elementos da Diagonal Secundária:", diagonalSecundaria.join(" "));
console.log("Soma dos Elementos da Diagonal Principal:", somaDiagonalPrincipal);
console.log("Soma dos Elementos da Diagonal Secundária:", somaDiagonalSecundaria);
