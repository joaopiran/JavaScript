/*
    estoque = [
        [1,"Volante",10,"Prateleira 01"],
        [2,"Pedal",5,"Prateleira 02"],
        [3,"Câmbio",50,"Prateleira 03"],
        [4,"Calota",100,"Prateleira 02"],
        [id, nome, quantidade, localização]
]

*/
// ==========================================
// TRANSFORMANDO EM ARRAY DE OBJETO
// ==========================================
const estoque = [
    {
        id:1,
        nome: "Volante",
        quantidade: 10,
        localizacao: "Prateleira 1"
},
    {
        id:2,
        nome: "pedal ",
        quantidade: 5,
        localizacao: "Prateleira 2"
},
    {
        id: 3 ,
        nome: " câmbio ",
        quantidade: 50,
        localizacao: "Prateleira 3"
},

    {
        id: 4 ,
        nome: " calota ",
        quantidade: 100,
        localizacao: "Prateleira 2"
}
];


// ==========================================
// TRANSFORMANDO EM OBJETO DE OBJETOS 
// ==========================================


// ==========================================
// CADASTRAR PRODUTO
// ==========================================

function cadastrarProduto(nome, quantidade, localizacao) {
    const novoPoroduto = {
        id:estoque.length + 1,
        nome: nome,
        quantidade: quantidade,
        localizacao: localizacao
    }; 
 
    estoque.push(novoPoroduto);

    console.log("Cadatro realizado com sucesso!");

}

// ==========================================
// LISTAR ESTOQUE
// ==========================================

function listarEstoque() { 
    for(const produto of estoque){
        console.log(
            `ID: ${produto.id}` +
            `NOME: ${produto.nome}` +
            `Quatidade: ${produto.quantidade}` +
            `localização: ${produto.localizacao}`
        );

    }   
}


// ==========================================
// BUSCAR PRODUTO
// ==========================================

function buscarProduto(idBuscado) {
    for(const produto of estoque){
        if(produto.id === idBuscado){
            console.log("Produto encontrado");

            console.log(
            `ID: ${produto.id}` +
            `NOME: ${produto.nome}` +
            `Quatidade: ${produto.quantidade}` +
            `localização: ${produto.localizacao}`
        );
         return produto;

        }

    }   
    console.log("Não encontramos o produto!");
}


// ==========================================
// ATUALIZAR QUANTIDADE
// ==========================================

function atualizarQuantidade(idBuscado, novaQuantidade) {
    for(produto of estoque){
        if(produto.id === idBuscado){
            produto.quantidade = novaQuantidade;
            console.log("quantidade atualizada");
            return;
        }
    }
}


// ==========================================
// DELETAR PRODUTO
// ==========================================

function deletarProduto(){
}

// ==========================================
// TESTANDO O SISTEMA
// ==========================================

console.log("cadastrando o produto--------")
cadastrarProduto("motor", 13, "prateleira 2");

console.log("\n------------------------")
listarEstoque();

console.log("\n Buscando produto------------------------")
buscarProduto(3);

console.log("\n atualizando quantidade do produto------------------------")
atualizarQuantidade(3, 30);
listarEstoque();

