//#region start operadores
/*
const a = 10;
const b = "10";

console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a == b); // comparação de valor
console.log(a === b); // comparação de valor e tipo
console.log(a !== b);*/

//#endregion


//#region exercicios
/*
const idade1 = 20;
const idade2 = 25;

console.log(idade1 > idade2);
console.log(idade1 < idade2);
console.log(idade1 >= idade2);
console.log(idade1 <= idade2);
console.log(idade1 == idade2);
console.log(idade1 === idade2);
console.log(idade1 !== idade2);*/

//#endregion

//#region operadores logicos

/*
const idade3 = 17;
const idade4 = 15;

// operador lógico AND
console.log(idade3 > 18 && idade4 > 18); // todas precisam ser verdade

// operador lógico OR
console.log(idade3 > 18 || idade4 > 18); // uma precisa ser verdade

// operador lógico NOT
console.log(!(idade3 >18)); // inverte as expressões*/

//#endregion

//#region  combinando operadores
/*
const idade = 25
const matriculaAtivo = false;

const podeComprar = idade >= 18 || matriculaAtivo;

console.log(podeComprar)*/

//#endregion 

//# region operadores de incremento e decremento
/*
let numero = 10;
console.log(numero++); //10
console.log(numero); //11
console.log(++numero); //12

console.log(numero--); //12
console.log(numero); //11
console.log(--numero); //10


//#endregion
*/

//# region exercicio 1 - comparação
/*
const x = 5;
const y = 10;
const resultado = x < y;
/*
console.log(x > y);
console.log(x < y);
console.log(x >= y);
console.log(x <= y);
console.log(x == y);
console.log(x === y);
console.log(x !== y);
//#endregion
*/
//#region exercicío 2 - == VS ==
/*
console.log(10 == "10");

console.log(10 === "10");

console.log(true == 1);

console.log(true === 1);

console.log(null == undefined);

console.log(null === undefined);
*/
//#endregion

//#region exercicio 3 - sistema de acesso - desafio
/*
const dataNascimento = new Date("2020-05-21");
const ativo = true;

const dezoitoAnosEmMilisegundos = 18 * 365.25 * 24 * 60 * 60 * 1000;

const podeAcesar = (new Date() - dataNascimento) >= 
            dezoitoAnosEmMilisegundos && ativo;

console.log(podeAcesar);*/

//#regionend