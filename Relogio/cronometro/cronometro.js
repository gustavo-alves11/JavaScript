var mili =0;
var seg = 0;
var min = 0;
var hour = 0;

const exibir = document.getElementById('h1');

// essa function usa um array para executar funçoes de maneira mais eficiente
const controle = (event) => {           
    functions[event.target.id](); 
}

buttons.addEventListener('click', controle); // chama a function controle 
// buttons.addEventListener('mouseOn', controle);

/// criei um array usando arrow functions 
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

