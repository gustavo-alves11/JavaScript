/// igualdade de objetos 
// comparar endereço 1 e 2
// function propriedade iguais 
// function endereço memoria iguais tipo referencias 


function endereco(rua, numero, cidade){
    this.rua = rua,
    this.numero = numero, 
    this.cidade = cidade
} 

const endereco1= new endereco('a',5,'D');
const endereco2= new endereco('a',5,'D');
const endereco3= endereco1;

function enderecoigual(endereco1, endereco2){
    return endereco1.rua === endereco2.rua &&
        endereco1.numero === endereco2.numero &&
        endereco1.cidade === endereco2.cidade;    
}

function enderecomemoria(endereco1, endereco2){
    return endereco1 === endereco3;
}

console.log(enderecoigual(endereco1,endereco2));

console.log(enderecomemoria(endereco1,endereco2));