let endereco = {
    rua: 'a',
    cidade: 'b',
    cep: 'c'
};


function exibirendereco(endereco){
    for (const index in endereco) 
        console.log(index, endereco[index]);
}

exibirendereco(endereco);