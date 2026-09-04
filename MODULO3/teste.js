/*const frutas = ["maçã", "banana", "laranja", "uva", "abacaxi", "pera"];*/

/*
frutas.push("morango");
console.log(frutas);

frutas.unshift("manga");
console.log(frutas);
// deleta o final
frutas.pop();

console.log(frutas);

//deleta o inicio
frutas.shift();
console.log(frutas)
*/
/*
const itemRemovido = frutas.pop();
console.log(itemRemovido);
*/

//varrendo o array

//for off 
/*
for (const fruta of frutas){
    console.log(fruta);
    return fruta;
}

frutas.forEach((fruta) => {
    console.log(frutas);
});

frutas.forEach((fruta) => {
    const nomeFruta =
    fruta.charAt(0).toUpperCase() + fruta.slice(1);
    console.log(nomeFruta);

});

function{
    ();
}
*/
/*
const numeros = [1, 2, 3, 4, 5, 6, ]

const numerosDobrados = numeros.map((numero) =>{
    return numero  * 2;


});

console.log(numerosDobrados);


// filter 

const maiorQue3 = numeros.filter((numero) =>{
    return numero > 3;
});

console.log(maiorQue3);

/* método | Pergunta    

| ------  | 
 FOREACH  |o que quero fazer com cada elemento
 MAP      |   como quero trnsformar cada elemento
 FILTER   |quais elemento quero manter
|
|
|
| */
/*
const numerof = numeros.find ((n) => n > 4);
console.log(numerof)

/*filter x find

filter = retrona vario elementos

find = retorna o primeriro elemento */

// some - verifica se pelo menos um elemnto atende a condição
/*
Boolean
const existeMaiorQue5 = numeros.some(n => n > 5);
console.log(existeMaiorQue5);


// every - verifica se todos os elemntos atendem a uam condição
//boolean
const existeMaiorQue0 = numeros.every(n => n > 0);
console.log(existeMaiorQue0);

//reduce - reduz o array a um unico valor,
//aplicando uma função a cada elemento

const soma = numeros.reduce((total, numero)  => {
    return total+ numero;
}, 0);
console.log(soma);
-+
*/

const produtos = [
    {nome: "produto 1", disponível: true},
    {nome: "produto 2", disponível: false},
    {nome: "produto 3", disponível: true},
    {nome: "produto 4", disponível: true},
];

//for of 
const produtoDisponivel = [];

for (const produto of produtos){
    if(produto.disponível) {
        produtoDisponivel.push(produto.nome);
    }
   
}

console.log(produtoDisponivel);


//map e filter

const prodDisponivel = produtos
    .filter((produto) => produto.disponível === true)
    .map((produto) => produto.nome);
    

 console.log(prodDisponivel);

