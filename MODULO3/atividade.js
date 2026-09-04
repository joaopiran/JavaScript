    //Atividade 1 - Sistema de aluno
const aluno = {
    nome: "Carlos",
    idade: 22,
    curso: "Análise e Desenvolvimento de Sistemas",

    endereco: {
        cidade: "São José dos Campos",
        estado: "SP"
    },

    ativo: true,

    apresentar() {
        console.log(`Aluno: ${this.nome}`);
    }
};

console.log(aluno.nome);
console.log(aluno.idade);
console.log(aluno.curso);
console.log(aluno.endereco);

aluno.endereco.cidade = "São Paulo"
console.log(aluno.endereco);
aluno.email = "joao@gmail.com"
console.log(aluno.email);

const { nome, curso, endereco } = aluno;
console.log(nome);

const alunoAtualizado ={
    ...aluno,
};
console.log(alunoAtualizado);

const json = JSON.stringify(aluno);
console.log(json);

// json passando par aobjeto
const objeto = JSON.parse(json);
console.log(objeto);

//1 - Motrar: Nome, Idade, Curso, Cidade, Estado
//2 - Alterar a cidade
//3 - Adicionar email 
//4 - Use o destructuring de alguma forma
//5 - Criar uma cópia utilizando spread para alunoAtualizado
//6 - Transformar o objeto em JSON
//7 - Voltar de JSON para objeto

//Atividade 2 -----------------------------------
/*
const usuario = {
    id: 1,
    nome: "Claudia Raia",
    email: "claudia@email.com",
    idade: 25,
    endereco: {
        cidade: "São Paulo",
        estado: "SP",
        numero: 145
    }
};

/*

    1 - Como acessar o nome?
    console.log(usuario.nome);

    2 - Como acessar a cidade?
    console.log(usuario.endereco.cidade);

    3 - Como alterar a idade?
    usuario.idade = 22
    console.log(usuario.idade);
    
    4 - Como adicionar telefone?
    usuario.telefone = "(19)99566-2727"
    console.log(usuario.telefone);

    5 - Como remover o email?
    delete usuario.email
    console.log(usuario);

    6 - Como criar uma cópia do usuário?
    const novoUsuario = {
    ...usuario
    };
    console.log(novoUsuario);
    7 - Como extrair somente nome e cidade?
   
    console.log(usuario.nome);
    console.log(usuario.endereco.cidade)

    8 - Como transformar o objeto em JSON?
    const json = JSON.stringify(usuario);
console.log(json);


    9 - Como transformar o JSON novamente em objeto

const usuario = JSON.parse(json);
console.log(usuario);
    return  pr


*/
