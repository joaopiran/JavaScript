//callabck

/** se vc pedir uma operação que demora muito não precisa esperar parado */

//#region timeout
console.log("1");
console.log("2");
console.log("3");
// sincrono


console.log("Inicio");

setTimeout(() => {
    console.log("Processamento terminou");

}, 2000)

console.log("fim")

//#endregion

//#region callback




numeros = [1, 2, 3, 4, 5, 6, 7, 90];

numeros.forEach((n) => {
    console.log(n);
});
// isso é callback
/*
(n) => {
    console.log(n);
}*/

//#endregion

//#region calback nome
function processandoUsuario(nome, callback) {
    console.log("Processando" + nome);
    callback();
}

processandoUsuario("Rihanna", () => {
    console.log("Usuario processado");
});

//#endregion
//============
/*
function buscarUsuario(callback) {
    //simulaçao do tempo
    setTimeout(() => {
        //construindo objeto
        const Usuario = {
            id: 1,
            nome: "Rihanna"
        };
        callback(Usuario);
    }, 2000)
}
console.log("inicio da chamada");

buscarUsuario((Usuario) => {
    console.log(Usuario);
});

console.log("Fim do processo");

//problema do callback

buscarUsuario => buscarPedido => buscarProduto => CalcularTotal*/

//Promeses- é uma promessa de que teremos um resulatado no futuro

//criando uma promise

//FORMATO 
//((parametros ... ) => (logica));

const promessa = new Promise((resolve, reject) => {
    const sucesso = false;
    
    if (sucesso === true) {
        console.log("Tudo certo amigão")
    }
    else {
        reject("Deu errado")
    }

});

//consumir a promisse

promessa
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((erro) => {
        console.log(erro)
    });