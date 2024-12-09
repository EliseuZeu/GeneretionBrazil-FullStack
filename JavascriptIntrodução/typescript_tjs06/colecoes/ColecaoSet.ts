
const frutas: Set<string> = new Set<string>();

//Adicionar dados na Coleção Set
frutas.add("Banana");
frutas.add("Maçã");
frutas.add("Caqui");
frutas.add("Banana");
frutas.add("Manga");
frutas.add("banana");

console.table(frutas);

// Verifica se existe um elemento na Coleção Set
console.log("A fruta Morango existe? ", frutas.has("Morango"));

// Apagar um elemento da Coleção Set
frutas.delete("Caqui");
console.table(frutas);

// Converte o Set em um Array e ordena os dados utilizando a ordem lexicográfica
let setOrdenado: Array<string> = Array.from(frutas).sort();
console.table(setOrdenado);

// Converte o Set em um Array e ordena os dados utilizando o padrão Português Brasil
let setOrdenado2: Array<string> = Array.from(frutas).sort((a, b) => a.localeCompare(b, "pt-BR"));
console.table(setOrdenado2);

