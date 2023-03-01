

function entrar(){
    const email = document.getElementById('email');
    const senha = document.getElementById('senha');

    if(email.value === ""){
        let mensagem = document.getElementById('email-aviso')
        adicionarClasseErro(email, mensagem);
    }
  
    if(senha.value === '') {
        let mensagem = document.getElementById('senha-aviso')
        adicionarClasseErro(senha,mensagem)
       
    } 
    
}

function adicionarClasseErro(elemento, idMensagem){
    idMensagem.style.display = "inline"
    elemento.style.borderColor = "red"
}




