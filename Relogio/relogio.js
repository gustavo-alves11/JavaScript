const exibir = document.getElementById('relogio');


function hAtual(){
    var hora = new Date();
    var hour = hora.getHours();
    var min = hora.getMinutes();
    var sec = hora.getSeconds();
    var hour = hour < 10 ? "0" + hour : hour;
    var min = min < 10 ? "0" + min : min;
    var sec = sec < 10 ? "0" + sec : sec;

    const time = [hour, min, sec];
    exibir.innerHTML = time.join(":");
}

setInterval(hAtual, 1000);
