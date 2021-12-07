// refazer igual o exerc de python
// Uma funçao ira avaliar se é primo ou não e a outra somara os numeros

function exibirnumeroprimo(numerolimite){
    for (let numero=2; numero <= numerolimite; numero++){
        if (numeroprimo(numero)) return true; 
        else return false;
    }
    
    
}    
function  numeroprimo(numero){ 
    for (let divisor = 2; divisor < numero; divisor++){
                if(numero % divisor == 0){
                    return false;
                }
    }
    return true;
}
    
//// essa função não funciona
function somarprimos(numero){
    saldo = 0;
    for (let i = 2; i <= numero; numero++)
        if (exibirnumeroprimo(i)){
            var saldo = saldo+i;
            console.log(saldo);
        }
 
}
exibirnumeroprimo(7)
