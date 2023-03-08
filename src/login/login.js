


function entrar(){
    const email = document.getElementById('email');
    const senha = document.getElementById('senha');
    

    if(email.value === "" || validarEmail(email.value) === false){
        let mensagem = document.getElementById('email-aviso');
        adicionarClasseErro(email, mensagem);
        
    }
  
    if(senha.value === '' || senha.value.length < 8) {
        let mensagem = document.getElementById('senha-aviso');
        adicionarClasseErro(senha,mensagem);
        
    } 

    

}


function adicionarClasseErro(elemento, idMensagem){
    idMensagem.style.display = "inline";
    elemento.style.borderColor = "red";
}

function cadastrar(){
    const nome = document.getElementById('nome');
    const sobrenome = document.getElementById('sobrenome');
    const logar = document.getElementById('logar');
    const entrar = document.getElementById('entrar');
    const confirma = document.getElementById('confirma');
    

    if(nome.value === '' || validarNome(nome.value) === false){
        let mensagem = document.getElementById('nome-aviso');
        adicionarClasseErro(nome, mensagem);

    }

    if(sobrenome.value === '' || validarNome(sobrenome.value) === false){
        let mensagem = document.getElementById('sobrenome-aviso');
        adicionarClasseErro(sobrenome, mensagem);

    }

    if(logar.value === '' || validarEmail(logar.value) === false){
        let mensagem = document.getElementById('logar-aviso');
        adicionarClasseErro(logar, mensagem);
        

    }

    if(entrar.value === '' || entrar.value.length < 8){
        let mensagem = document.getElementById('entrar-aviso');
        adicionarClasseErro(entrar, mensagem);
       

    }

    if(confirma.value === '' || confirma.value.length < 8 || validarSenha(entrar.value, confirma.value) === false){
        let mensagem = document.getElementById('confirma-aviso');
        adicionarClasseErro(confirma, mensagem);
        
    }

        
}

function validarEmail(email){
    const emailRegex = new RegExp(/^[a-zA-Z0-9._-]+@[a-z.]+\.[a-zA-Z]{2,}$/);

    if(emailRegex.test(email)){
        return true;
    }
        return false;

}

function validarNome(nome){
    const nomeRegex = new RegExp(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/);
    if(nomeRegex.test(nome)){
        return true;
    }
        return false;
}

function validarSenha(senha, confirmarSenha){
    if(senha === confirmarSenha){
        return true;
    }
        return false;
}






    


  

    

