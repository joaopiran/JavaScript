const temperatura = 380;
const freioPressionado = true;

const alertaPerigo = (temperatura >= 400);
console.log(alertaPerigo);

const usoIntensoDoFreio = (temperatura > 300 && freioPressionado);
console.log(usoIntensoDoFreio);

const usoIntenso = (temperatura <=400 && temperatura >= 50 );
console.log(usoIntenso);

const alertaPainel = (temperatura > 400  || temperatura <0);
console.log(alertaPainel);

const estadoInativo = (!(freioPressionado));
console.log(estadoInativo);