const bike = document.getElementById('select').value;
const altura  = document.getElementById('altura').value;
var tamanho = 0;
const resultado = document.getElementById("msg");

console.log(bike);



function tipoBike(){
    console.log(altura);
    if (bike === "MTB"){
        mtb();
    }
    else speed();
}

function mtb(){
    
    if (altura<= 171){
        tamanho = "s";
    }
    else if (altura<= 176 && altura>= 172){
        tamanho = "m";
    }
    else if (altura<= 182 && altura>= 177){
        tamanho = "L";
    }
    else if (altura<= 190 && altura>= 183) {
        tamanho="XL";}
    return exibir();
}


function speed(){
    console.log(altura);
    if (altura<= 160){
        tamanho = 46;
    }
    
    else if (altura<= 170 && altura>= 161){
        tamanho = 50;
    }
    else if (altura<= 180 && altura>= 171){
        tamanho = 53;
    }
    else if (altura<= 190 && altura>= 181){
        tamanho = 56;
    }
    return exibir();
}

function exibir(){
    
    resultado.textContent = `O tamanho da sua bike é ${tamanho}`; 
    document.getElementById("bike").removeEventListener("click",tipoBike);
    // gostaria que o evento parasse apos ser exibido para nao ter que recaregar a pagina
}

document.getElementById("bike").addEventListener("click",tipoBike);
