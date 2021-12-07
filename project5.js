let a = 10;

function parImpar(a){
    for(let i=1; i<=a; i++){
        if (i%2 === 0){
            console.log(i,'Par');
        } 
        else{ 
            console.log(i,'Impar');
        }
    }
}
parImpar(a);