// Fizzbuzz 
// divisivel por 3  = Fizz 
// divisivel por 5 = Buzz 
// divisivel por 3 e 5 = FizzBuzz
// Nao divisivel por 3 e 5 = entrada
// nao é um numero = nao é um numero

const resultado = fizzBuzz(15);
console.log(resultado);

function fizzBuzz(entrada){
    if (typeof entrada !== 'number'){
        return 'Não é um numero';
    }
    else{
            if (entrada % 3 == 0 && entrada % 5 == 0){
                return 'FizzBuzz';   
                
            }
            else if (entrada%3 == 0){
                return 'Fizz';
            }
        
            else if (entrada%5 == 0){
                return 'Buzz';
            }    
            else return entrada;
        }

    }
