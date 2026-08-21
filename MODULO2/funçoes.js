//Atividade 1 — Saudação
//Crie uma função chamada saudacao que receba um nome e retorne uma mensagem.
//Resultado esperado : Olá, Maria!

function saudacao(){
    console.log("olá, joão");
}

saudacao();


//----------------------------------------------------------------------

//Atividade 2 — Calculadora
//Crie quatro funções para cada uma das operações +, -, *, /
//Cada função deve receber dois números e retornar o resultado.

function soma (a, b){
    return a + b;
}
console.log("resultado", soma(6,2))

function subtracao (a, b){
    return a - b;
}
console.log("resultado", subtracao(6,2))

function divisao (a, b){
    return a / b;
}
console.log("resultado", divisao(6,2))

function multiplicaçao (a, b){
    return a * b;
}
console.log("resultado", multiplicaçao(6,2))

//----------------------------------------------------------------------

//Atividade 3 — Verificação de idade
//Crie uma função que receba uma idade e retorne: Menor de idade ou Maior de idade

function entradaIdade (idade){
    if (idade >= 18){
        return("maior de idade")
      }  else {
        return("menor de idade")
      }

}
    console.log(entradaIdade(14));
//----------------------------------------------------------------------

//Atividade 4 — Arrow Function

/*

    Transforme:
        function calcularDobro(numero) {
            return numero * 2;
        }

    em uma arrow function.
*/
const calcularDobro = (numero) =>{

    return numero * 2

}


console.log(calcularDobro(17));
//----------------------------------------------------------------------