//procurar o botão
document.querySelector("#add-time")

//quando clicar no botao
.addEventListener("click", cloneField)

//Executar uma acao
function cloneField() {
    //Duplicar os campos. que campos? '.schedule-item'
    //o cloneNode faz que se clone um nó da Dom 
    //que funciona como uma arvore cheia de nós
    //true porque ele vai aceitar que ele tem que clonar
    //todo o campo informado anteriormente
    //a explicação da var está no proximo bloco
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //depois que ja esta funcionando ele clona com as informaçoes passadas
    //preciso limpar os campos. quais? do fields
    const fields = newFieldContainer.querySelectorAll('input')
    
    //para cada campo, limpar
    fields.forEach(function(field){
        //pegar o field do momento e limpa ele
        field.value = ""
    })

    //colocar na pagina. onde?? #schedule-items
    //necessariamente abaixo ou seja vai ser um filho
    //então dentro do filho eu poderia colocar todo o no informado acima
    //mas é melhor criar uma VARIAVEL para resumir 
    //voltar e criar a VARIAVEL const
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
    
}