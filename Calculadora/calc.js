var n1 = document.getElementById("n1").value; // pega o valor de n1
var n2 = document.getElementById("n2").value; // pega o valor de n2
var r = document.getElementById("r"); // pega o campo de resposta do html
var R = 0; 

//// Puxa o evento click e mostra qual funçao irá executar
document.getElementById("somar").addEventListener("click",somar);   
document.getElementById("subtrair").addEventListener("click",subtrair); 
document.getElementById("dividir").addEventListener("click",dividir); 
document.getElementById("multiplicar").addEventListener("click",multiplicar); 


/// funções que seram executadas quando clicar nos botões
function somar(){
    R = parseInt(n1)+parseInt(n2)// problema de tipo de dados resolvido com o parseInt
    var h3 = document.createElement('h3'); // cria um elemento no html
    var result = document.createTextNode("A soma dos dois numeros é "+R) /// criando uma variavel com um texto
    h3.appendChild(result);  //add um 'nó' na estrutura
    document.getElementById("r").appendChild(h3); // onde será inserido
}

function subtrair(){
    R = parseInt(n1)-parseInt(n2);
    var h3 = document.createElement('h3'); // cria um elemento no html
    var result = document.createTextNode("A subtração dos dois numeros é "+R) /// criando uma variavel com um texto
    h3.appendChild(result);  //add um 'nó' na estrutura
    document.getElementById("r").appendChild(h3); // onde será inserido
}
function dividir(){
    R = n1/n2;
    var h3 = document.createElement('h3'); // cria um elemento no html
    var result = document.createTextNode("A divisão dos dois numeros é "+R) /// criando uma variavel com um texto
    h3.appendChild(result);  //add um 'nó' na estrutura
    document.getElementById("r").appendChild(h3); // onde será inserido
}
function multiplicar(){
    R = n1*n2; // cria um elemento no html
    var h3 = document.createElement('h3'); // cria um elemento no html
    var result = document.createTextNode("A multiplicação dos dois numeros é "+R); /// criando uma variavel com um texto
    h3.appendChild(result);  //add um 'nó' na estrutura
    document.getElementById("r").appendChild(h3); // onde será inserido
       
}

//if (){
 //   exibir(result);   }

//function exibir(result){
//    var h3 = document.createElement('h3'); // cria um elemento no html
 //   h3.appendChild(result);
//    document.getElementById("r").appendChild(h3);}



/// PROBLEMAS: Seria melhor se houvesse uma fução exibir 
/// o resultado poderia desaparecer apos um tempo. 
