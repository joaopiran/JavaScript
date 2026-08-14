//const idade = 20;

//console.log(idade <= 18); 
/*
const a = 8;
const b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

//#region teste de idade
const idade = 20;


if(idade >= 18 ){
    console.log("maior de idade");
}
//#endegion*/

//switch case/*
/*const dia = 6;

switch(dia){
    case  1:
        console.log("Domingo");
        break;

    case  2:
        console.log("Segunda");
        break;

    
    case  3:
        console.log("Terça");
        break;

    case  4:
        console.log("quarta");
        break;

    case  5:
        console.log("Quinta");
        break;

    case  6:
        console.log("sexta");
        break;

    case  7:
        console.log("Sábado");
        break;

    default:
        console.log("Dia não encontrado");

} */


/*
const idade = 20;
const mensagem = idade >=18 ? "Maior" : "Menor";
console.log(mensagem);*/

//laços

//while, for
//#region - while - enquanto for verdade

let contador = 1;

while(contador <=6){
    console.log(contador);

    contador++;
}

//#endregion

//#region for

//for(//iniciação; condição; incremento)
for(let i = 1; i<=5; i++){
    console.log(i);
}

//for ...of 
const frutas = ["Morango", "Banana", "Maçã", "Ameixa", "Uva"];
//otimizado para array
for(const fruta of frutas){
    console.log(fruta);

}

//tradicional
for( let i =0; i < frutas.length; i++){
    console.log(frutas[i]);
}
