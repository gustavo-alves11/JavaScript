// var dateStart = new Date;
// const exibir = document.getElementById('relogio');


// function datenow(){
//     var datefinish = new Date;
//     var dateDecorrido = datefinish - dateStart
//     return dateDecorrido;
// }
// let functions = {

//     'start': (dateDecorrido) => {
//         dateStart = new Date;
//         dateStart = dateDecorrido + dateStart;
//         interval = setInterval(miliToHours, 1);
        
//     },
//     'stop':  () => {
        
//         clearInterval(interval);
//     },
//     'reset': () => {
//         datenow();
//     }
// }
// const controle = (event) => {           
//     functions[event.target.id]();
// }
// buttons.addEventListener('click', controle);


// function miliToHours(){
//     var mili = parseInt((datenow()%1000)/100)
//     var sec = parseInt((datenow() / 1000)%60);
//     var min = parseInt((datenow()/(1000*60))%60);
//     var hour = parseInt((datenow()/(1000*60*60))%24);
//     var hour = hour < 10 ? "0" + hour : hour;
//     var min = min < 10 ? "0" + min : min;
//     var sec = sec < 10 ? "0" + sec : sec;
//     const time = [hour, min, sec, mili];
//     exibir.innerHTML = time.join(":");
// }Parei de fazer dessa forma devido ao fato de quando pauso o tempo continua contando, após algumas modificaçoes no cod o retorno éNaN 

var mili =0;
var seg = 0;
var min = 0;
var hour = 0;

const exibir = document.getElementById('h1');

const controle = (event) => {           
    functions[event.target.id]();
}
buttons.addEventListener('click', controle);
// buttons.addEventListener('mouseOn', controle);



const functions = {
    'start': () => {
        interval = setInterval(timer, 95)
           
    },
    'stop': () => {
        clearInterval(interval);
    },
    'reset': () =>{
        clearInterval(interval);
        mili =0;
        seg = 0;
        min = 0;
        hour = 0;
        mostrar(hour, min, seg, mili);
    }  
}

function mostrar(hour, min, seg, mili){
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    seg = seg < 10 ? "0" + seg : seg;
    const time = [hour, min ,seg, mili];
    exibir.innerHTML = time.join(':');

}
function stop(){
};

const timer= () =>{
    mili++
    if(mili == 10){
        mili = 0;
        seg++;
    }       
    if (seg == 60){
        seg=0;
        min++;
    }
    if (min == 60){
        min=0;
        hour++;        
    }
    mostrar(hour, min, seg, mili) 
}

