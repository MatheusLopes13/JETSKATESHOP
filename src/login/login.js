// validar se a senha e o validar senha sao iguais;
// validar os erros;


function entrar(){
    const email = document.getElementById('email');
    const senha = document.getElementById('senha');
    

    if(email.value === "" || validarEmail(email.value) === false){
        let mensagem = document.getElementById('email-aviso')
        adicionarClasseErro(email, mensagem);
        alert('Por favor, preencha o seu email!')
    }
  
    if(senha.value === '' || senha.value.length < 8) {
        let mensagem = document.getElementById('senha-aviso')
        adicionarClasseErro(senha,mensagem)
        alert('Informe uma senha com no mínimo 8 caracteres');
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
    

    if(nome.value === '' || validarNome(nome.value) === false){
        let mensagem = document.getElementById('nome-aviso')
        adicionarClasseErro(nome, mensagem)

    }

    if(sobrenome.value === '' || validarNome(sobrenome.value) === false){
        let mensagem = document.getElementById('sobrenome-aviso')
        adicionarClasseErro(sobrenome, mensagem)

    }

    if(logar.value === '' || validarEmail(logar.value) === false){
        let mensagem = document.getElementById('logar-aviso')
        adicionarClasseErro(logar, mensagem)
        alert("Por favor, preencha seu email!")

    }

    if(entrar.value === '' || entrar.value.length < 8){
        let mensagem = document.getElementById('entrar-aviso')
        adicionarClasseErro(entrar, mensagem)
        alert('Informe uma senha com no mínimo 8 caracteres');

    }

    if(confirma.value === '' || confirma.value.length < 8 || validarSenha(entrar.value, confirma.value) === false){
        let mensagem = document.getElementById('confirma-aviso')
        adicionarClasseErro(confirma, mensagem)
        alert('Senhas não são iguais.');
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






    


  

    

