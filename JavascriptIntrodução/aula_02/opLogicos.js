const leia = require("readline-sync");

//dados Usuário
const usuario = "user@gmail.com.br";
const senha = "user1234";
const isGerente = true;
const isAdmin = true;
const isBlock = false;

console.log("\nTela de Login");

let usuarioLogin = leia.question('Digite o seu usuario: ')

let senhaLogin = leia.question('Digite o sua senha: ', {
    hideEchoBack: true, 
})

if(usuarioLogin === usuario && senhaLogin === senha){
    var mensagem = "Seja Bem Vinde! Usuário autenticado com sucesso!"
}else{
    var mensagem = "Acesso Negado"
}

console.log(mensagem)

if(!isBlock){
    console.log("Usuário ativo")
}else{
    console.log("Usuário está inativo! Contate o Administrador")
    process.exit(0)
}

if(isAdmin || isGerente){
    console.log("Acesso ao painel administrativo liberado!")
}else{
    console.log("Acesso ao painel administrativo negado!")
}