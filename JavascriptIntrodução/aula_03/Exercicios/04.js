const leia = require("readline-sync"); // importando readline para leitura dados do usuario.

let string1, string2, string3;

console.log("==== JOGO DO BICHO ==== \n");


string1 = leia.question("Ecolha entre Vertebrado ou Invertebrado: ");

if(string1 === "Vertebrado" || string1 === "vertebrado") {
    string2 = leia.question("\nEcolha entre Ave ou Mamifero: ");

    if(string2 ==="Ave" || string2 === "ave"){
        string3 = leia.question("\nEscolha entre Carnivoro ou Onivoro: ");

        if(string3 === "Carnivoro" || string3 === "carnivoro"){
            console.log(`A Animal escolhida foi ${string1} + ${string2} + ${string3} = Águia`);
        }
        else if(string2 === "Onivoro" || string2 === "onivoro"){ 
            console.log(`A Animal escolhida foi ${string1} + ${string2} + ${string3} = Pomba`);
        }else {
            console.log("Foi digitado incorretamente, tente novamente");
        }
        
    }
    else if(string2 === "Mamifero" || string2 === "mamifero"){
        string3 = leia.question("\nEscolha entre Herbivoro ou Onivoro: ");

        if(string3 === "Herbivoro" || string3 === "herbivoro"){
            console.log(`A Animal escolhida foi ${string1} + ${string2} + ${string3} = Vaca`);
        }
        else if(string3 === "Onivoro" || string3 === "onivoro"){ 
            console.log(`A Animal escolhida foi ${string1} + ${string2} + ${string3} = Homem`);
        }else {
            console.log("Foi digitado incorretamente, tente novamente");
        }
    }
}

else if(string1 === "Invertebrado" || string1 === "invertebrado") {
    string2 = leia.question("\nEcolha entre Inseto ou Anelideo: ");

    if(string2 ==="Inseto" || string2 === "inseto"){
        string3 = leia.question("\nEscolha entre Hematofago ou Herbivero: ");

        if(string3 === "Hematofago" || string3 === "hematofago"){
            console.log(`A Animal escolhida foi ${string1} + ${string2} + ${string3} = ✔ Pulga`);
        }
        else if(string3 === "Herbivoro" || string3 === "herbivoro"){ 
            console.log(`A Animal escolhida foi ${string1} + ${string2} + ${string3} = ✔ Lagarta`);
        }else {
            console.log("Foi digitado incorretamente, tente novamente");
        }
    }
    else if(string2 ==="Anelideo" || string2 === "anelideo"){
        string3 = leia.question("\nEscolha entre Hematofago ou Onivoro: ");

        if(string3 === "Onivoro" || string3 === "onivoro"){
            console.log(`A Animal escolhida foi ${string1} + ${string2} + ${string3} = ✔ Minhoca`);
        }
        else if(string3 === "Hematofago" || string3 === "hematofago"){ 
            console.log(`A Animal escolhida foi ${string1} + ${string2} + ${string3} = ✔ Sanguessuga`);
        }else {
            console.log("Foi digitado incorretamente, tente novamente");   
        }        
    }else {
        console.log("Foi digitado incorretamente, tente novamente");
    }
} else {
    console.log("Foi digitado incorretamente, tente novamente");
    
}

