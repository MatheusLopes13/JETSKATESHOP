function pagar(){
    const cartao = document.getElementById('cartao');
    const validade = document.getElementById('validade');
    const codigoSeguranca = document.getElementById('seguranca');
    const cep = document.getElementById('cep');
    const endereco = document.getElementById('endereco');
    const numero = document.getElementById('numero');
    const referencia = document.getElementById('referencia');

   if(cartao.value === '' || cartao.value.length < 16){
    const mensagem = document.getElementById('aviso-pagamento');
    mensagem.style.display = 'inline';

   }
    
   if(validade.value === '' || validade.value.length < 5){
    const mensagem = document.getElementById('aviso-validade');
    mensagem.style.display = 'inline';
   }

   if(codigoSeguranca.value === '' || codigoSeguranca.value.length < 3){
    const mensagem = document.getElementById('aviso-seguranca');
    mensagem.style.display = 'inline';

   }
 
   if(cep.value === '' || cep.value.length < 8){
       const mensagem = document.getElementById('aviso-cep');
       mensagem.style.display = 'inline';

   }

   if(endereco.value === ''){
       const mensagem = document.getElementById('aviso-endereco');
       mensagem.style.display = 'inline';

   }

   if(numero.value === ''){
    const mensagem = document.getElementById('aviso-numero');
    mensagem.style.display = 'inline';

    }

    if(referencia.value === ''){
        const mensagem = document.getElementById('aviso-referencia');
        mensagem.style.display = 'inline';
 
    }

   



}






