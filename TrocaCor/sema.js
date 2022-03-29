const red = document.getElementById('red');         // chamando div que será modificada
const yellow = document.getElementById('yellow'); // chamando div que será modificada
const green = document.getElementById('green'); // chamando div que será modificada
const buttons = document.getElementById('buttons'); // chamando div que contem os botões 
let corIndex = 0;
let intervalo = null;


// essa funçao chama os botoes de forma dinamica
const controle = (event) => {           //
    pararIntervalo(); // funçao para parar o loop quando clicar em outro botão 
    funcoes[event.target.id]();       
}                          
buttons.addEventListener('click', controle); // quando clicar em um botao executa a function controle


const Index = () => { /// serve para somar um numero ao index
    corIndex = corIndex <2 ? ++corIndex : 0;
}


const mudarCor = () => { // uma arrow function retorna um valor mais facilmente, por isso está sendo ultilizada
    const cores = ['vermelho','amarelo','verde'];  //um array com stings de mesmo nome das variáveis 
    const cor = cores[corIndex]; // apos o index ser alterado na funçao anterior aqui vai definir as cores
    funcoes[cor](); /// com a cor definida ele vai ser executado
    Index(); // funçao que vai retornar o valor de corindex, que é uma variavel global
}


let funcoes = { // um objeto para chamar as funçoes de maneira mais dinamica
// Em um objeto só é possivel definir uma arrow function dessa forma 
'vermelho': () => { red.style.background = 'red'; 
                    yellow.style.background = '#b3a314'; // essas funçoes alteram as cores dos circulos 
                    green.style.background = 'green';
},
'amarelo': () => {  red.style.background = '#660000';
                    yellow.style.background = 'yellow'; // essas funçoes alteram as cores dos circulos
                    green.style.background = 'green';

},
'verde': () =>     {red.style.background = '#660000';
                    yellow.style.background = '#b3a314'; // essas funçoes alteram as cores dos circulos
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