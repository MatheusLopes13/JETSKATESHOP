
let numero = 1;

window.onload = ()=>{
    let quantidade = document.getElementById("quantidade").innerText;
    if(quantidade == 1){
        document.getElementById("botao-menos").disabled = true;
    }
}


function adicionar() {
    numero += 1;
    document.getElementById("quantidade").innerText = numero;
    if (numero == 1 || numero < 1){
        document.getElementById("botao-menos").disabled = true;
    }
    else {
        document.getElementById("botao-menos").disabled = false;
    }

}

function excluir() {
    numero = numero - 1;
    document.getElementById("quantidade").innerText = numero;
    if (numero == 1 || numero < 1){
        document.getElementById("botao-menos").disabled = true;
    }
    else {
        document.getElementById("botao-menos").disabled = false;
    }


}






