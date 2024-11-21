programa {
  funcao inicio() {
    inteiro vetor[10] = {2, 5, 1, 3, 4, 9, 7, 8, 10, 6}
    inteiro soma = 0, media
  


    // todos elementos indices impares 
    para(inteiro i =0; i < 10; i++){
      se( vetor[i] % 2 == 1){
      escreva("Numero impares são: ", vetor[i], "\n" )
      }
    }

    escreva("\nNumeros pares\n")

        // todos elementos indices par 
    para(inteiro i =0; i < 10; i++){
      se( vetor[i] % 2 == 0){
      escreva("Numero par são: ", vetor[i], "\n" )
      }
    }

        // Soma de todos valores do vetor 
    para(inteiro i =0; i < 10; i++){
        soma = soma + vetor[i]
      }
      escreva("Soma dos valores do vetor e: ", soma)

      media = soma / 10
      escreva("\nMedia dos valores do vetor e: ", media)
      
    }

  }
}