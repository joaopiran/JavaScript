//#region -  Manipulação básica

const frutas = ["Maçã", "Banana", "Laranja", "Pera", "Limão", "Mexiriaca"];


  //  Adicione "Morango" no final.
    frutas[6] = "morango"
console.log(frutas);
   // Adicione "Abacaxi" no início.
   frutas[0] = "abacaxi"
console.log(frutas);

    //Remova o último elemento.
    frutas[6].pop
    console.log(frutas);
    //Remova o primeiro elemento.
    frutas.shift
    console.log(frutas);
    //Mostre a quantidade de frutas.
   console.log(frutas.length);



//#endregion

//#region - forEach

const nomes = [
    "Ana",
    "Carlos",
    "João",
    "Maria", 
    "Claudia", 
    "Adriana",
    "Cesar",
    "Asafe"
];
//Utilize forEach para mostrar: Olá, Ana! .... .assim por diante 
nomes.forEach(nome => {
    
  console.log("Olá," + nome);

});
//#endregion

//#region map

const precos = [10, 20, 30, 40, 50, 60, 70, 80];

//Crie um novo array com os preços acrescidos de 10%.

const novosPrecos = precos.map((preco) => {
    return preco + preco * 0.10;
});
console.log(novosPrecos);

//#endregion

//#region filter
const numeros = [5, 12, 18, 25, 30, 7, 40];


//Crie um novo array somente com números maiores que 20.
const numeroMaioresQue20 = numeros.filter(numero => numero > 20)
console.log(numeroMaioresQue20);


//#endregion

//#region find
const listaNumeros = [5, 12, 18, 25, 30];

//Encontre o primeiro número maior que 20.
const numeroMAIORque20 = numeros.find ((n) => n > 20);
console.log(numeroMAIORque20)


//#endregion

//#region some
const idades = [12, 15, 17, 20, 14];



//Existe alguém maior de idade? Utilize o some para encontrar! 
const MaiorQue18 = numeros.some(n => n > 18);
console.log(MaiorQue18);

//every

//Usando o array acimima codifique respondendo: Todos são maiores de idade?
const ExisteMaiorQue18 = numeros.every(n => n > 18);
console.log(ExisteMaiorQue18);

//#endregion

//#region reduce

const valores = [100, 200, 50, 150];

//Calcule o valor total.
const valorTotal = valores.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
console.log(valorTotal);

//#endregion