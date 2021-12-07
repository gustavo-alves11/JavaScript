//// Introdução a arrays /////
/// a palavra apos o . é chamada de metodo
/// Add novos elementos
const numeros = [1,2,3]; // não podemos modificalo de forma convencional pois é uma constante.
// Um array é um objeto portanto podemos usar alguns comandos.
//Para add um elemento no inicio:
numeros.unshift('a');
console.log(numeros);

//Para add um elemento no meio do array:
numeros.splice(1,0,'b'); //primeiro numero é o indice, o segundo é o que vamos deletar (nesse caso nenhum), 
//e o ultimo é oque vamos inserir
console.log(numeros);

// No final:
numeros.push('c');
console.log(numeros);

/// Encontrar elementos (tipos primitivos)
console.log(numeros.indexOf(2)); // retorna o indice do numero que estamos procurando (se não existir irá retornar -1)
console.log(numeros.indexOf(2) !== -1); // retorna true ou false
console.log(numeros.includes(2));// retorna true ou false

/// Encontrar elementos (tipos de referencia)
const carros = [
    {marca:'BMW', modelo:'M2'},
    {marca:'Audi', modelo:'RS3'}
]
var carro = carros.find(function(carros){ // Vai procurar em carros
    return carros.modelo === 'M2'; // vai retornar o objeto onde Modelo === M2
});
console.log(carro);
                //COM ARROW FUNCTIONS
console.log(carros.find((carros) => carros.modelo === 'M2')); 

///Remover elementos
// NO final
console.log(numeros);
const ultimo = numeros.pop();
console.log(ultimo);
console.log(numeros);
//No meio
const meio = numeros.splice(2,1); /// A mesma função de add porem aqui indicamos quantos elementos queremos remover (1)
console.log(meio);
console.log(numeros);

//No inicio
const inicio = numeros.shift();
console.log(inicio);
console.log(numeros);

// Esvaziar um array;
// para apagar apenas o array, é possivel reatribui-lo como vazio 
// para apagar todas as referencias em todas as variaveis que esse array está é possivel fazer dessa forma:
numeros.length = 0;
console.log(numeros); 
/// pode ser ultilizado o metodo splice usando dessa forma
/// numeros.splice(0,numeros.length);

/// combinar 
const pares = [2,4,6,8];
const impares = [1,3,5,7,9];

//const combinar = pares.concat(impares);
//console.log(combinar);

/// dividir elementos 
//const dividir = combinar.slice(1,5); // nao vai até o ultimo indice
//console.log(dividir);

/// usando o operador spread
const combinar = [...pares,...impares];

/// forEach
//usando ARROW FUNCTION
pares.forEach((par, indice)=> console.log(par, indice));


/// Combinar Arrays
const colocartraço = impares.join('.');
console.log(colocartraço);

