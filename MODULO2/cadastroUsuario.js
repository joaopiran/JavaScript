// acdastro de usuario

function cadastroUsuario(id, nome, senha, cpf, email){
    return{
        id,
        nome,
        senha,
        cpf,
        email
    };   
}
const usuario = cadastroUsuario(1, "josé", "AlunoMorreu#23", 98765432198, "x@gmail,com");

console.log(usuario)

console.log(" oi " + usuario.nome + " Seu cadastro foi realizado com sucesso!");

function somarTra(numero1, numero2){
    return numero1 + numero2;

}

const somar = (numero1, numero2) => {
    return numero1 + numero2;
}
console.log("tradicionsl",somarTra(8,3));
console.log("tradicional", somar(8, 3))z;

