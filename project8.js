const array = [70,70,80];

function media(array) {
    let soma = 0;
    for (let nota of array) {
        soma += nota;
    }
    const media = soma/(array.length);    
    
    if (media<=59) return 'F';
    if (media<=69)return 'D';
    if (media<=79)return 'C';
    if (media<=89)return 'B';
    if (media<=100)return 'A';

}
media(array);
console.log(media(array));