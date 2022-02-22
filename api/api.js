/// projeto para por em pratica estudos de APIs


/// a linha 8 pega o parametro do objeto e seleciona apenas o array de objetos 
function fetchAPI(){
    fetch('https://reqres.in/api/users?page=2') //requisiçao assincrona (essa linha retorna uma promise) 
        .then((resposta) => resposta.json())  // então usamos o .then para continuar rodando 
        .then((data) => data.data)/// o data é o parametro da funçao anterior 
        .then(array => {      //a function .map do proximo .then não funcionava se os dados não estivessem em um array                                
            const cont = document.querySelector('.conteiner')

            array.map((data) => {
                const card = document.createElement('div'); //cria o card
                const first_name = document.createElement('h1'); //cria um h1 onde vai estar o nome
                const last_name = document.createElement('h2'); // cria um h2 onde vai estar o sobrenome
                const img = document.createElement('img'); //cria um elemento de Imagem
                
                first_name.innerHTML = "First name: " + data.first_name;
                last_name.innerHTML =  "Last name: " + data.last_name;
                img.src = data.avatar;
                cont.appendChild(card);
                card.appendChild(img);
                card.appendChild(first_name);
                card.appendChild(last_name);
            });
        })
    };
fetchAPI();