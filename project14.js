//// Esse projeto tinha o intuito de criar objetos que  servissem para faixas de preços
/// os objetos diferante dos anteriores são constituidos por arrays cada um correspondente a uma faixa de preço

/// podem ser criados de diferentes formas:

// Primeira forma: objeto convencional criado manualmente

let faixas = [
    {tooltip: 'a', min: 0, max:700},
    {tooltip: 'b', min: 700, max:1000},
    {tooltip: 'c', min: 1000, max:999999}
];


/// segunda forma: Factory function
// essa pode ser criados de maneira mais facil os itens do array
function criarfaixa(tooltip, min, max){
    return { // colchetes para que seja um objeto 
        tooltip,
        min,
        max
    }
}
/// abaixo o array que foi montado a partir da função anterior
let faixa2 =[
    criarfaixa('a',0,700),
    criarfaixa('b',700,100),
    criarfaixa('c',100,7000),
]

// terceira forma:  construction Function

function preco(tooltip, min, max){
    this.tooltip = tooltip, 
    this.min = min, 
    this.max = max
}

let faixa3=[
    new preco('a', 0, 50),
    new preco('a', 50, 150),
    new preco('a', 150, 3000)
]

console.log(faixas);
console.log(faixa2); // em todos os casos o resultado é o mesmo
console.log(faixa3);

