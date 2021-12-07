console.log('olá'); 
const numero = 9  //constante 
let nome = 'Gustavo'; //string variavel 
// em js variaveis podem mudar de tipo dinamicamente
let nomeCompleto = 'Gustavo Santos'; //variavel
console.log(nome);
console.log(nomeCompleto); 
console.log(numero);

/////////objetos///////////

let pessoa = {
    nome: 'Gustavo',
    nomeCompleto:'Gustavo Santos',
    idade: 18
};

//console.log(pessoa);

//////////arrays///////

let familia = [50, 47, 18, 15];

console.log(familia[2]);


/////////functions/////////////

let idade = 18
function mudaIdade(nova){
    idade = nova; 
};

mudaIdade(4);
console.log(idade);

function dizerNome(){
    console.log('Gustavo');
};

dizerNome();

//////////////operadores logicos//////////////
//
//
//
// operadores ternarios 
let pontos = 190;
let tipo = pontos >= 100 ? 'premium' : 'comum';
console.log(tipo);
/////////////////// operadores logicos
/// && / || / !
let maiorDeIdade = true;
let possuiCarteira = true;
let podeAplicar = maiorDeIdade && possuiCarteira;
// let podeAplicar = maiorDeIdade || possuiCarteira;
let recusado = !podeAplicar;
console.log(podeAplicar);

////////////////// If else ///////////
let horario= "Manhã";

if (horario == "Manhã"){
    console.log('Bom dia');
}
else if (horario == "Tarde"){
    console.log('Boa tarde');
}
else{
    console.log('Boa noite');
}
////// switch case
let hora= "Tarde";

switch (hora){
    
    case 'Manhã':
    console.log('Bom dia');
    break;

    case 'Tarde':
    console.log('Boa tarde');
    break;

    case 'Noite':
    console.log('Boa noite');
    break;

    default:
    console.log('Horario não reconhecido');
}


/////laço for///////

for(let i = 1; i <=8 ; i++){
    if(i %2 !==0){// numeros impares
    console.log(i);
    }
}

//while 

let i = 5 

while (i >= 1){
    if(i% 2 !== 0){
        console.log(i);
    }
    i--;
}
// do while
let g = 1
do {
    console.log('digitando');
    g++;
} while(g<10)

//for in (foreach em php)

const pessoa2 = {
    nome:'gustavo',
    idade: 19
};

for(let chave in pessoa2){
    console.log(chave,pessoa2['nome']);
}

const cores =['vermelho', 'Azul', 'Preto'];

for (let indice in cores){
    console.log(indice,cores[indice])
}

///for of

for(let cor of cores){
    console.log(cor)
}


