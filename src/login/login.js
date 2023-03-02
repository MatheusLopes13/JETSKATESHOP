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

function cadastrar(){
    const nome = document.getElementById('nome')
    const sobrenome = document.getElementById('sobrenome')
    const logar = document.getElementById('logar')
    const entrar = document.getElementById('entrar')
    const confirma = document.getElementById('confirma')
    

    if(nome.value === ''){
        let mensagem = document.getElementById('nome-aviso')
        adicionarClasseErro(nome, mensagem)

    }

    if(sobrenome.value === ''){
        let mensagem = document.getElementById('sobrenome-aviso')
        adicionarClasseErro(sobrenome, mensagem)

    }

    if(logar.value === ''){
        let mensagem = document.getElementById('logar-aviso')
        adicionarClasseErro(logar, mensagem)

    }

    if(entrar.value === ''){
        let mensagem = document.getElementById('entrar-aviso')
        adicionarClasseErro(entrar, mensagem)

    }

    if(confirma.value === ''){
        let mensagem = document.getElementById('confirma-aviso')
        adicionarClasseErro(confirma, mensagem)

    }


  

    
}

