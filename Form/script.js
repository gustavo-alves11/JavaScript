// criando um "array" dos inputs que tem required
const fields = document.querySelectorAll("[required]")


function customValidation(event){
    const field = event.target 
    //vez que o erro for ativado ficara ativo portanto precisamos resetar 
     //elimina balao de erro do navegador 
     event.preventDefault()
    

    function verifyErrors(){
       
        let foundError= false;


        //IMPORTANTE: a API do html fornece um objeto onde dentro da propriedade validity existem diversos possivel erros
        // o for abaixo irá servir de ajuda para conferir cada dado e verificar se é TRUE, e se existem outros erros além
        // do custonError. 
       
        for(const error in field.validity){
            if(field.validity[error]) {
                foundError= error
            }
        }
        return foundError;
    }

    const error = verifyErrors();
    console.log(error)
    
    // field.setCustomValidity("Campo obrigatório");
    // if(error){
    // /// troca mensagem de required
    //     field.setCustomValidity("Campo obrigatório");
    // }else {
    //     field.setCustomValidity("")
    // }
}
// para cada field no array fields ele executará um cod
for(let field of fields){    //for of no geral serve para arrays e for 'in' trabalha com propriedades de um objeto
    field.addEventListener("invalid", customValidation)// caso um dos itens do array forem invalidos 
    // console.log("Campo Inválido")    
}



document.querySelector("form").addEventListener("submit",event =>{
  //apenas para testes   
    
//para nao enviar 
    event.preventDefault()
})
