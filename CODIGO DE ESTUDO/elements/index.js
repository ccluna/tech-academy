/*alert("Seja muito bem-vindo ao Luna's World!!")
document.write('Essa página é muito irada!')*/


window.onload = function() {
    var nofriends = window.document.getElementById ("nofriends") ;
     nofriends.addEventListener("mouseover", function() {
             document.getElementById("bisu").innerHTML += "VAI ASSISTIR THE ROOM!!!<br>"
    })
}


const lista = document.getElementsByTagName('ul');

const gostos = ['Pão doce', 'Música', 'Botafogo', 'Distribuições Linux baseadas em RHEL e Arch'];

function montaLista() {
    let textoLista = '';
    for(let gosto of gostos) {
        textoLista += '<li>' + gosto + '</li>';
    }
    return textoLista
}

document.getElementsByTagName('ul').innerHTML = montaLista();





/*const pessoa = {
    primeiroNome : 'Ana',
    ultimoNome : 'Santos',
    endereco: {
        rua : 'dos Bobos',
        num : 0
    },
    nomeCompleto : function() {
        return this.primeiroNome + ' ' + this.ultimoNome;
    }
};

console.log(pessoa.nomeCompleto())

const frase = 'Minha cor favorita é: azul';
const indice = frase.indexOf(':');

const cor = frase.substring(indice+2)
console.log() */


/*let nota1 = 10;
let nota2 = 10;

function media(n1, n2) {
	return (n1, + n2)/2;
}

let resultado = media(nota1, nota2);

if(resultado >= 6) {
	console.log(`Aprovado com mádia ${resultado}.`);
} else if (resultado >=4) {
	console.log(`Em recuperação com mádia ${resultado}.`);
} else {
    console.log(`Reprovado com mádia ${resultado}.`);
}*/

/*let nota1 = 5;
let nota2 = 5;

function media(n1, n2) {
		return (n1, + n2)/2;
}

let resultado = media(nota1, nota2);

//let  situacao = resultado >=6 ? 'Aprovado' : 'Reprovado';


let situacao = (resultado >= 6) ? `Aprovado com média ${resultado}` :
               (resultado >= 4) ? `Recuperação com média ${resultado}` :
                                  `Reprovado com média ${resultado}`; 

console.log(situacao);*/

/*let opcao = 2;

switch (opcao) {
	case 1:
		console.log('Entrega do tipo econômica em até 10 dias úteis');
		; // o break é a instrução que faz o case parar de rodar qdo satisfeito
case 2:
		console.log('Entrega do tipo normal em até 3 dias úteis');
		;
case 3:
		console.log('Entrega do tipo expressa em até 1 dia útil');
		break;
default:
		console.log('Opção de entrega inválida');
}*/

class Produto{
    static RGB = 'sim';
    tipo;
    valor;
    constructor(tipo,valor,RGB) {
            this.tipo = tipo;
            this.valor = valor;
            this.RGB = RGB;
    }
}

const prod = new Produto('Generico',50,);  // objeto criado
console.log(prod);

const newprod = prod;    // novo objeto criado a partir do objeto anterior
newprod.tipo = 'Computador';
newprod.valor = 1500;
newprod.RGB = 'no'

console.log(prod);

class Veiculo{
    static marca = 'Toyota';
    tipo;
    valor;
    constructor(tipo,valor,marca) {
            this.tipo = tipo;
            this.valor = valor;
            this.marca = marca;
}
}

const car1 = new Veiculo('sedan',50000,'Honda');  // objeto criado
console.log(car1);

const car2 = car1;    // novo objeto criado a partir do objeto anterior
car2.tipo = 'hat';
car2.valor = 30000;
car2.RGB = Produto.RGB;

console.log(car1);