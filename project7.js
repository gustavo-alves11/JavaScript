
function somar(limite){
    let total = 0;
    for (let i=1; i <= limite; i++)
        if( i%3 ===0 || i%5 === 0)
           total += i;
        console.log(total);
}

somar(10);