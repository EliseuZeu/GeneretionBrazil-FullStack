programa {
  funcao inicio() {
    inteiro vetor[10] = {2, 5, 1, 3, 4, 9, 7, 8, 10, 6}
    inteiro tamanho = 10
    inteiro ordem
    logico trocou

    // Ordenação com faça-enquanto
    faca {
      trocou = falso // Nenhuma troca feita no início
      para (inteiro i = 0; i < tamanho - 1; i++) {
        se (vetor[i] < vetor[i + 1]) { // Comparação para ordem decrescente
          ordem = vetor[i]
          vetor[i] = vetor[i + 1]
          vetor[i + 1] = ordem
          trocou = verdadeiro // Marca que houve troca
        }
      }
    } enquanto (trocou)

    escreva("Vetor ordenado (decrescente): ")
    para (inteiro i = 0; i < tamanho; i++) {
      escreva(vetor[i], " ")
    }
  }
}