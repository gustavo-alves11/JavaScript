let pontos = verificarVelocidade(121);

function verificarVelocidade(velocidade){
    if (velocidade>=75){
    velocidade = velocidade-70;
    const ponto = velocidade/5;
    if (ponto>12)
    {return 'carteira suspensa'};
    return Math.floor(ponto);
    }
    else {return 'Dentro da velocidade'}

}
console.log(pontos);