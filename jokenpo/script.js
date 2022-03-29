// usar function randon
//array para as opçoes de sinais
// functions para: sortear numero, pegar valor de array, comparar pc e player,  
// 
const buttons = document.getElementById('buttons'); // definir os buttons.
const h1  = document.getElementById('result');
const respostapc = document.getElementById('respostapc');
const respostaPlayer =document.getElementById('respostaPlayer');
const scorePlayer = document.getElementById('scorePlayer');
const scorePc = document.getElementById('scorePc');
let pcscore = 0;
let playerscore = 0;


// essa funçao chama os botoes de forma dinamica
const controle = (event) => {            
    let valor = event.target.id;  
    analize(valor);    
}   
                      
buttons.addEventListener('click', controle); // quando clicar em um botao executa a function controle


const result = () =>  {
    min = Math.ceil(0); // arredonda para o inteiro mais proximo
    max = Math.floor(3); // arredonda para baixo
    const result = Math.floor(Math.random()*(max-min)+min)
    return result;
    
}
const pc = () => {
    let tipos = ["R", "P", "T"];
    const nun = result();
    let tipo = tipos[nun];
    return tipo
}

function analize(valor){
    const valorpc = pc();
    show(valor, valorpc);

    switch (valor+valorpc) {
        case "RT":
        case "TP":
        case "PR":
            ganhou(valor,valorpc);
            
            break;
        
        case "TR":
        case "PT":
        case "RP":
            perdeu(valor,valorpc);
            break;

        case "TT":
        case "PP":
        case "RR":
            empate(valor,valorpc);
            break;    
    }
}


function perdeu(valor,valorpc){
    pcscore++; 
    
    h1.innerHTML = `RESULTADO: ${toword(valor)} perde para ${toword(valorpc)}, Você perdeu!!!`;
    scorePc.innerHTML = pcscore;

}

function ganhou(valor,valorpc){
    playerscore++;
    h1.innerHTML = `RESULTADO: ${toword(valor)} ganha de ${toword(valorpc)}, Você Ganhou!!!`;
    scorePlayer.innerHTML = playerscore;
}

function empate(valor,valorpc){
    h1.innerHTML = `RESULTADO: ${toword(valor)} empata com ${toword(valorpc)}, Empatou!!!`;

}

function toword(valor){
    if (valor == "R"){
        return "Pedra";
    }
    else if (valor == "P"){
        return "Papel";
}
else return "Tesoura";
}

function show(valor, valorpc){
    respostaPlayer.innerHTML = `${toword(valor)}`; 
    respostapc.innerHTML = ` ${toword(valorpc)}`;
    
};

    