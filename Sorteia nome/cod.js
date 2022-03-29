var nomes = [];
var button = document.getElementById('add');
var button2 = document.getElementById('sortear');
button2.addEventListener('click', sorteio); 
button.addEventListener('click', addname);  

function addname(){
    var newname = document.getElementById('name').value;
    nomes.push(newname);
    console.log(nomes);
    arrayname = document.getElementById('names').innerHTML
    arrayname = arrayname + newname+", ";
    document.getElementById('names').innerHTML = arrayname;
    //return nomes; 
}

function sorteio(){
    let numero = Math.floor(Math.random()*nomes.length);
    // console.log(numero);
    let sorteio = nomes[numero];
    showSorteio = document.getElementById("sorteado");
    showSorteio.innerHTML = "Nome sorteado: " + sorteio;    
}
