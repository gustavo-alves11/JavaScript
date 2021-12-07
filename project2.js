let a = 1;
let b = 0;
let maior = max(a,b);
console.log(maior);

function max(a,b){
    if (a>= b){
        return a;
    }
    else return b;
}