/// postagem de blog, um objeto simples

/* esse é um objeto normal
let postagem ={
    titulo: 'a',
    mensagen: 'b',
    autor: 'c',
    vizualizacoes: 15,
    comentarios:[
        {autor: 'a', mensagem:'b'},
        {autor: 'a', mensagem:'b'}
    ],
    aovivo : true
}
*/


function postagem(titulo, mensagem, autor ){
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizacoes= 0,
    this.comentarios = [],
    this.aovivo = true
}

postagem = new postagem('a', 'b', 'c');

console.log(postagem);




