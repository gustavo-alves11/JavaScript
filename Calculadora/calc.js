var n1 = document.getElementById("n1").value; // pega o valor de n1
var n2 = document.getElementById("n2").value; // pega o valor de n2
var R = 0; 
var results = [];
var O = ""

//// Puxa o evento click e mostra qual funçao irá executar
document.getElementById("somar").addEventListener("click",somar);   
document.getElementById("subtrair").addEventListener("click",subtrair); 
document.getElementById("dividir").addEventListener("click",dividir); 
document.getElementById("multiplicar").addEventListener("click",multiplicar); 


/// funções que seram executadas quando clicar nos botões
function somar(){
    R = parseInt(n1)+parseInt(n2)// problema de tipo de dados resolvido com o parseInt
    var O = "Soma";
    var results = [O, R]; // uma funçao nao retorna mais de um valor devido a isso fiz um array
    return exibir(results);
}

function subtrair(){
    R = parseInt(n1)-parseInt(n2);
    var O = "subtração";
    var results = [O, R];
    return exibir(results);
}
function dividir(){
    R = n1/n2;
    var O = "divisão";
    var results = [O, R];
    return exibir(results);
}
function multiplicar(){
    R = n1*n2; // cria um elemento no html
    var O = "multiplicação";
    var results = [O, R];
    return exibir(results);
   
}

function exibir(results){
    document.getElementById("r").textContent =`A ${results[0]} dos dois numeros é ${results[1]}`;
    
}

/// PROBLEMAS: Seria melhor se houvesse uma fução exibir 
/// o resultado poderia desaparecer apos um tempo. 
