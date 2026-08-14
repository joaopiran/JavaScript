//#region atividades 

// Atividade 1 — Maioridade - Crei uma variável idade e atribua um 
// valor. Em seguida, use uma estrutura condicional para verificar 
// se a idade é maior ou igual a 18. Se for, exiba "Maior de idade",
// caso contrário, exiba "Menor de idade".

const idade = 11;

if(idade >=18){
    console.log("Maior de idade")
} else{
    console.log("Menor de idade")
}

//Atividade 2 — Aprovação - Implemente com if/else e com switch case. 
// Crie uma variável nota e atribua um valor.

const nota = 8;

if(nota <  5){
    console.log("Reprovado");
} 
if(nota >= 5 && nota < 7 ) {
    console.log("Recuperação");
}
   else if (nota >= 7 ) { 
    console.log("Aprovado");
}
//2.1
switch(true){
    case (nota < 5):
        console.log("reprovado");
        break;

    case  (nota  >= 5 && nota < 7 ):
        console.log("recuperação");
        break;

    
    case  (nota >= 7  ):
        console.log("aprovado");
        break;
}

//Atividade 3 — Login - Crie uma variável usuario e outra senha. 
//Em seguida, use uma estrutura condicional para verificar se o 
//usuário e a senha são válidos e pode ou não acessar o sistema.

const usuario = "joão"
const senha = 123

if (senha === 123 && usuario === "joão") {
    console.log("Usuário autorizado");
} 
else {
    console.log("Usuário não autorizado");
}

//Atividade 4 — Status do pedido - Crie uma variável statusPedido e
// atribua um valor (pendente, pago, envidado, processando, entregue,
// concluído).

const statusPedido = "pago"; 

switch(statusPedido){
    case "pago":
        console.log("pedido pago ");
        break;
    case "pendente":
        console.log("pedido pendente de pagamento ");
        break;
    case "enviando":
        console.log("Seu pedido foi enviado e está a caminho!");
        break;
    case "processando":
        console.log("Seu pedido está sendo embalado e processado ");
        break;
    case "entregue":
        console.log("O pedido foi entregue no endereço de destino ");
        break;
    case "concluído":
        console.log("Pedido finalizado com sucesso. Obrigado pela compra! ");
        break;

    default:
        console.log("status de pedido não encontrado");
}


//Atividade 5 — Contador - Crie uma algoritmo que com "for" para imprimir 
// todos os numeros pares de 1 a 100.

for(let i = 2; i <= 100; i += 2){
    console.log(i);
}

//atividade 6 - Refaça o exercicio 5 agora usando for...of e while.
let contadorPares = 2;

while(contadorPares <=100){
    console.log(contadorPares);

    contadorPares+=2;
}

const Pares = [];

for(let i = 2; i <= 10; i += 2){
    console.log(i);
}

for(const par of Pares){
    console.log(par);

}

//Atividade 7 — Crie um array com 10 nomes e exiba cada um dele usando for...of.

/*const nomes = ["Ana, Bia, Caio, Davi, Eduardo, Fernando, Gustavo, Helena, Israel, João "];

for(const nome of nomes){
    console.log(nome);

}*/



//Atividade 8 - Crie um array com 10 números e exiba somente os nomes que tem mais 
// de 5 letras usando for...of, if e .length. 

const nomes = ["Ana", "Bia", "Caio", "Davi", "Eduardo", "Fernando", "Gustavo", "Helena", "Israel", "João"];

for (const nome of nomes) {
    
    
    if (nome.length > 5) { 
        console.log(nome); 
    }
}



//Atividade 9 — Somando valores
/*
    Dado o array de números, calcule a soma de todos os elementos do 
    array e exiba o resultado no console.
    Dica: você pode usar um loop for ou for...of para percorrer 
    o array e somar os valores.
    const numeros = [10, 20, 30, 40, 50];

*/

const numeros = [10, 20, 30, 40, 50];

let Soma = 0;
for(const numero of numeros){
    Soma = Soma + numero
}

console.log(Soma)


//Atividade 10 — Desafio do backend 
/* 
    Dado o array abaixo, mostre somente o pedidos pagos 

    const pedidos = [
    { cliente: "Ana", valor: 150, pago: true },
    { cliente: "Carlos", valor: 300, pago: false },
    { cliente: "Maria", valor: 500, pago: true },
    { cliente: "João", valor: 200, pago: true },
    { cliente: "Luizinho", valor: 100, pago: true },
    { cliente: "Mel", valor: 243, pago: true },
    { cliente: "ND da VA", valor: 2400, pago: false },
    { cliente: "Ana", valor: 5400, pago: false },
    { cliente: "Lebron ", valor: 1200, pago: true }
];
*/

const pedidos = [
    { cliente: "Ana", valor: 150, pago: true },
    { cliente: "Carlos", valor: 300, pago: false },
    { cliente: "Maria", valor: 500, pago: true },
    { cliente: "João", valor: 200, pago: true },
    { cliente: "Luizinho", valor: 100, pago: true },
    { cliente: "Mel", valor: 243, pago: true },
    { cliente: "ND da VA", valor: 2400, pago: false },
    { cliente: "Ana", valor: 5400, pago: false },
    { cliente: "Lebron ", valor: 1200, pago: true }
]

for(let i = 0; i<pedidos.length; i++){

    //verificar se o pedido é "pago" é true
    if(pedidos[i].pago === true){
        console.log(pedidos[i]);
    }
}

//#endregion