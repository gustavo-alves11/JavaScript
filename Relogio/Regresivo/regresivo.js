
var datefinish = new Date('january 1 2022 00:00');
datefinish = (Date.parse('january 1 2022 00:00'));

const exibir = document.getElementById('h1');

function datenow(){
    var dateStart = new Date;
    datedecorrido= datefinish - dateStart;
    return datedecorrido;
}

function miliToTime(){
    var seg = parseInt((datenow()/1000) % 60 )+ "s";
    var min = parseInt((datenow()/(1000*60))%60)+ "m";
    var hour = parseInt((datenow()/(1000*60*60))%24)+ "h";
    var days = parseInt((datenow()/(1000*60*60*24))%31)+ "d";
    
    hour = hour < 10 ? "0" + hour : hour;
    days = days < 10 ? "0" +days: days;
    min = min < 10 ? "0" + min : min;
    seg = seg < 10 ? "0" + seg : seg;
    
    const time = [days, hour, min, seg];
    exibir.innerHTML = time.join(":");
    

}

setInterval(miliToTime, 1000);