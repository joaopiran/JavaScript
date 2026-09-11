// no promisses temos

buscarUsuario().then(usuario => {
    console.log(usuario);
});

//asyn cawait - essa função vai funcionar de forma assincrona e vai 
// ter um pedaço que vamos precisar esperar


async function buscarUsuarioAsync(id){
    try{
        //aqui é o que quero que aconteça 
    const usuario = await buscarUsuario();
    console.log(usuario);
    }
    catch(erro) {
        //erro do rolou
        console.log(erro);
    }

}