const exibir = document.getElementById('relogio'); ///local onde será exibido o relogio


function hAtual(){  // function princopal onde tudo funciona
    var hora = new Date(); // instanciando o objeto Date
    var hour = hora.getHours(); //usando método get hours para 
    var min = hora.getMinutes();
    var sec = hora.getSeconds();
    var hour = hour < 10 ? "0" + hour : hour;
    var min = min < 10 ? "0" + min : min;
    var sec = sec < 10 ? "0" + sec : sec;

    const time = [hour, min, sec];
    exibir.innerHTML = time.join(":");
}

setInterval(hAtual, 1000);
