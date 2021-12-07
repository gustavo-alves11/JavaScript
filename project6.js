const carro = {
    marca : 'ford',
    ano : 2009,
    modelo : 'ka'
}

function exibirInformaçoes(obj){
    for (indice in obj)
        if (typeof obj[indice] === 'string') // usa a propriedade nãp o objeto
            console.log(indice,obj[indice])         
}

exibirInformaçoes(carro);
