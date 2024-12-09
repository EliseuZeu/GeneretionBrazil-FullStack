// Array para armazenar as cores
let cores: string[] = [];

// Solicitar ao usuário que insira 5 cores
for (let i = 0; i < 5; i++) {
    let cor: string | null = prompt(`Digite a cor ${i + 1}:`);
    if (cor) {
        cores.push(cor);
    } else {
        console.log("Entrada inválida. Tente novamente.");
        i--; 
    }
}


console.log("Listar todas as cores:");
cores.forEach(cor => console.log(cor));


let coresOrdenadas: string[] = [...cores].sort();

// Exibe as cores ordenadas
console.log("\nOrdenar as cores:");
coresOrdenadas.forEach(cor => console.log(cor));
