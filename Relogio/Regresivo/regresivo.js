
var datefinish = new Date('january 1 2023 00:00'); ///data final (var retorna valor em milisegundos)
//datefinish = (Date.parse('january 1 2023 00:00')); // retorna milisegundos tbm, não é necessario instanciar a classe

const exibir = document.getElementById('h1'); // onde será exibido

function datenow(){
    var dateStart = new Date; // data atual
    datedecorrido= datefinish - dateStart; //tempo até a data final
    return datedecorrido; // retorno da função
}

function miliToTime(){ // funçao para deixar o retorno da função datenow() legivel
    var seg = parseInt((datenow()/1000) % 60 )+ "s"; //converter em seg
    var min = parseInt((datenow()/(1000*60))%60)+ "m"; //converter em min
    var hour = parseInt((datenow()/(1000*60*60))%24)+ "h"; //converter em hora
    var days = parseInt((datenow()/(1000*60*60*24))%365)+ "d"; //converter em dias
    
    // add em cada numero que for menor que 10 um numero 0 a esquerda por questoes esteticas
    hour = hour < 10 ? "0" + hour : hour;
    days = days < 10 ? "0" +days: days;
    min = min < 10 ? "0" + min : min;
    seg = seg < 10 ? "0" + seg : seg;
    
    // array para retornar os valores 
    const time = [days, hour, min, seg];
    exibir.innerHTML = time.join(":"); //metodo join incrementa : entre os itens do array
    

}
// set interval vai executar o codigo inteiro a cada 1000 milisegundos 
setInterval(miliToTime, 1000);