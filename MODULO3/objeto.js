/*
um objeto representa uma "coisa " do mundo real atráves de propriedades e comportamentos.

    const nome = [] array
    const nome = {} objeto
    const arrayDeobjeto [{}, {}, {}] ---- Mais comum
    const objetoDeobjeto { {}, {}, {}} ---- Pode rolar também

    */

//constuir um objeto
/*
const aluno = {
    id: 1,
    nome: "Davi",
    idade: 17,
    curso: "Ensino médio integrado",
    RM: 2557,
    cadastroAtivo: true,
    email: null,
    hobbies :["ler","bola",  "xadrez"],
    endereço: {
        rua: "Rua 35, 405",
        bairro: "Jd Itália",
        cidade: "Santa Rita",
        estado: "São Paulo",
        país: "Brasil",
        cep: 13670000

    }
};
*/
//console.log(aluno);

//Acessando propriedades dos objetos
/*
if ( aluno.cadastroAtivo === true){
    console.log(aluno.nome + " Seja bem-vindo ao nosso sistema")
   
}
else{
    console.log("O seu cadastro não está ativo. Procure o RH");
}

console.log(aluno.endereço.rua);*/

//Alterar propriedades do objeto
/*
aluno.idade = 18;

console.log(aluno.idade);
*/
//Alterar cadastro e bairro
/*
aluno.cadastroAtivo = false;
aluno.endereço.bairro = "Bonanza";

console.log(aluno.cadastroAtivo);
console.log(aluno.endereço.bairro);

//Adicionando propriedade
aluno.cpf = 12345678901;
aluno.telefone = "(19)99566-2727";
console.log(aluno);

//Deletar uma propriedade
delete aluno.curso;
console.log(aluno);*/

/*console.log(filme.titulo);

filme.ano = 1973
filme.diretor = "Coppela"
delete filme.genero
console.log(filme);

const filme = {
    titulo: "O poderoso chefão",
    ano: 2026,
    genero: "...",

    apresentar : function(){
        //this
        console.log("o melhor " + filme.titulo);
        console.log(`o melhor   ${this.titulo}`);
    }
};
filme.apresentar();*/



//destrucuring
/*
const aluno = {
    id: 1,
    nome: "Davi",
    idade: 17,
    curso: "Ensino médio integrado",
    RM: 2557,
    cadastroAtivo: true,
    email: null,
    hobbies :["ler","bola",  "xadrez"],
    endereço: {
        rua: "Rua 35, 405",
        bairro: "Jd Itália",
        cidade: "Santa Rita",
        estado: "São Paulo",
        país: "Brasil",
        cep: 13670000

    }
};
/*const  {nome, idade, RM} =aluno

console.log(nome);

const {nome: nomeCompleto} = aluno;
console.log(nomeCompleto);*/

//spread operator ... algo como espalhar
/*
const dadosFamilias = {
    nomeMae: "Silvia",
    nomePai: "Israel"

    
};

const usuario = {
    ...aluno,
    ...dadosFamilias,
    dataCadastro: "28/08/26"

};
 
console.log(usuario)

*/
/*
const dadosPessoais = {
    nome: "guilherme",
    matricula: "20260828",
    curso: "Análise e desenvovlimento de sistemas"

};

const dadosContatos = {
    email: "guilherme@email.com",
    telefone: "(11) 99999-9999"
};

const perfilCompleto ={
    ...dadosPessoais,
    ...dadosContatos
};
console.log(perfilCompleto);

const perfilAtualizado ={
    ...dadosPessoais,
    status: "matriculado"
}

perfilAtualizado.curso = "Engenharia de software"


console.log(perfilAtualizado)

*/

//object.keys, object.values e object.entries
//chaves de objetos


/*const aluno = {
    id: 1,
    nome: "Davi",
    idade: 17,
    curso: "Ensino médio integrado",
    RM: 2557,
    cadastroAtivo: true,
    email: null,
    hobbies :["ler","bola",  "xadrez"],
    endereço: {
        rua: "Rua 35, 405",
        bairro: "Jd Itália",
        cidade: "Santa Rita",
        estado: "São Paulo",
        país: "Brasil",
        cep: 13670000

    }
};

console.log(Object.keys(aluno));

console.log("------------------")
//valores do objeto
console.log(Object.values(aluno));

console.log("------------------")

//relação chave <---> valor
console.log(Object.entries(aluno));

//objeto x JSON 

const nomexx = {
    propriedades
};

JSON
{
    propriedades
}*/

const aluno = {
    id: 1,
    nome: "Davi",
    idade: 17,
    curso: "Ensino médio integrado",
    RM: 2557,
    cadastroAtivo: true,
    email: null,
    hobbies :["ler","bola",  "xadrez"],
    endereço: {
        rua: "Rua 35, 405",
        bairro: "Jd Itália",
        cidade: "Santa Rita",
        estado: "São Paulo",
        país: "Brasil",
        cep: 13670000

    }
};

const json = JSON.stringify(aluno);
console.log(json);

// json passando par aobjeto
const objeto = JSON.parse(json);
console.log(objeto);
