const fields = document.querySelectorAll("[required]")

for( field of fields ){
    field.addEventListener("invalid", event => { 
        // eliminar o bubble apenas quando necessario
        event.preventDefault()
        // chama a function
        customValidation(event)
    })
    field.addEventListener("blur", customValidation)// quando desfocar o campo "reinicia a validação"   
}


//Função abaixo valida o campo
function ValidateField(field) {
    // logica para verificar se existem erros
    function verifyErrors() {
        let foundError = false; // erro começa a logica falso

        for(let error in field.validity) { //passa por todos os erros para verificar se estão tru
            // então verifica se tem erro
            if (field.validity[error] && !field.validity.valid ) {// se tiver erro E o fild não for valido 
                foundError = error // atribui um valor (caso tiver erro) ao let 
            }
        }
        return foundError; // valor retornado
    }
        // Para Customizar a mensagem
    function customMessage(typeError) { ///Uma maneira bem interessante, é criado uma const com "objetos"
        const messages = {
            text: { //fild
                valueMissing: "Por favor, preencha este campo" //Type error
            },
            email: { //fild
                valueMissing: "Email é obrigatório", //Type error
                typeMismatch: "Por favor, preencha um email válido" //Type error
            }
        }

        return messages[field.type][typeError]// Retornar dessa forma para ser usada na function setCustomMessage(message)
    }

    //Depois de customizar a mensagem vai setar no erro
    function setCustomMessage(message) {
        const spanError = field.parentNode.querySelector("span.error") //Pega o span de acordo com o campo atual
        
        if (message) {
            spanError.classList.add("active")
            spanError.innerHTML = message
        } else {
            spanError.classList.remove("active")
            spanError.innerHTML = ""
        }
    }

    return function() { ///A funçao validateFild retorna outra function
                ///No bloco abaixo que as functions sao declaradas 
        const error = verifyErrors()

        if(error) {
            const message = customMessage(error) 

            field.style.borderColor = "red"
            setCustomMessage(message)
        } else {
            field.style.borderColor = "green"
            setCustomMessage()
        }
    }
}


function customValidation(event) {

    const field = event.target
    const validation = ValidateField(field)

    validation() // é a function que a ValidateFild retorna, 
    // como é anonima podemos usa-lá assim como uma const
}










/// apenas para não enviar o form
document.querySelector("form")
.addEventListener("submit", event => {
    console.log("enviar o formulário")

    // não vai enviar o formulário
    event.preventDefault()
})