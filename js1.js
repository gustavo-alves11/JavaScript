/// Factory functions 
/// conceito muito parecido com POO de PHP ( na verdade é igual)
const celular7 = {
    marca: 'Azus',
    tamanhoTela: 6,
    capacidadeBateria: 5000,
    ligar: function(){
        console.log('fazendo ligação')
    }
}

function criarCelular(marca, tamanhoTela, capacidadeBateria){
    return{
        marca,
        tamanhoTela,
        capacidadeBateria,
        ligar(){
            console.log("fazendo ligação")
        }


    }    
}
const celular1 = criarCelular('Samsung', 6, 4500);
console.log(celular1);

////---------- Meu exemplo--------------
const carro = {
    marca : 'BMW',
    modelo: 'M2',
    motor: 3.0,
    acelerar: function(){
        console.log('Acelerando')
    }
}
function criarCarro(marca, modelo, motor){
    return{
        marca,
        modelo,
        motor,
        acelerar(){
            console.log('Acelerando')
        }
    }
}

const carro1 = criarCarro('BMW', 'M2', 3.0);
console.log(carro1);

/////   CONSTRUCTOR FUNCTION //////
//pascaul Case = UmDoisTres
function Celular(marca, tamanhoTela, capacidadeBateria){
    this.marca = marca,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function(){
        console.log('Ligando')
    }
}

const celular = new Celular('LG', 6, 5000)
console.log(celular)

////// Os objetos são dinamicos no ponto de vista que, podemos add propriedades
/// ex: carro.cor; (add a propriedade cor ao objeto carro)
/// ex delete carro.cor ( deleta essa propriedade)

//---------CLONANDO OBJETOS-------///

const novoObjeto = Object.assign({
    // aqui podemos add novas propriedades, parece as heranças do PHP POO
    cor: 'azul'
}, celular7);
console.log(novoObjeto);


///----------MATH---------------////
/// É possivel pesquisar diversos outros métodos.
Math.random(); // aleatório
Math.max(); // retorna o maior valor

//----------STRING------------////
// tipo primitivo
const mensagem0 = 'mensagem pra testar';
/// tipo objeto

const novamensagem = new String('Olá pessoal'); // a string se torna um array 
novamensagem.length;

//---------  Template literal ----------------///


const mensagem = 'olá isso é\n uma mensagem'; /// esse tipo não é muito ultilizavel

const nome = 'Gustavo'
const outramensagem = `Olá ${nome} 
como vai?
até mais`;/// ${ } serve para add uma variavel no texto

console.log(mensagem);

console.log(outramensagem);

/// --------------- DATE  ------------------
/// / REVER DATAS
const data1 = new Date();
const data2 = new Date('march 06 2019 09:30');
const data3 = new Date(2019,03,06,9,30);
const data4 = new Date();

