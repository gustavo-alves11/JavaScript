const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const green = document.getElementById('green');
const buttons = document.getElementById('buttons');
let corIndex = 0;
let intervalo = null;

const controle = (event) => {           //
    pararIntervalo(); // funçao para parar o loop quando clicar em outro botão 
    funcoes[event.target.id]();         //     Isso para
}                                       //   chamar os botoes de forma dinamica
buttons.addEventListener('click', controle); //



const Index = () => { /// serve para somar um numero ao index
    corIndex = corIndex <2 ? ++corIndex : 0;
}


const mudarCor = () => { // uma arrow function retorna um valor mais facilmente, por isso está sendo ultilizada
    const cores = ['vermelho','amarelo','verde'];  //um array com stings de mesmo nome das viriaveis 
    const cor = cores[corIndex]; // apos o index ser alterado na funçao anterior aqui vai definir as cores
    funcoes[cor](); /// com a cor definida ele vai ser executado
    Index(); // funçao que vai retornar o valor de corindex, que é uma variavel global
}


let funcoes = { // um objeto para chamar as funçoes de maneira mais dinamica
// Em um objeto só é possivel definir uma arrow function dessa forma 
'vermelho': () => { red.style.background = 'red'; 
                    yellow.style.background = '#b3a314'; 
                    green.style.background = 'green';
},
'amarelo': () => {  red.style.background = '#660000';
                    yellow.style.background = 'yellow';
                    green.style.background = 'green';

},
'verde': () =>     {red.style.background = '#660000';
                    yellow.style.background = '#b3a314';
                    green.style.background = '#00FF00';
},
'auto':() =>   {
              intervalo = setInterval(mudarCor, 1000); // vai armazenar um id do setinterval
}

}
//funcoes.amarelo(); ou funcoes['amarelo']() para executar uma função dentro de um objeto

const pararIntervalo = () => {
    clearInterval(intervalo); // clear vai parar o processo do id armazenado
}