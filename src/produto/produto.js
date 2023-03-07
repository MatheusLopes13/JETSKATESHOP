
let numero = 1;
const produto = [
    {
        id: 1,
        imagem: "../publico/imagens/cadeado.png",
        nome: "Tiago lemos",
        valor: 600,
       
    },
    {
        id: 2,
        imagem: "../publico/imagens/cadeado.png",
        nome: "Calça Chino",
        valor: 450
    },
    {
        id: 3,
        imagem: "../publico/imagens/cadeado.png",
        nome: "Polar shirt",
        valor: 300
    },
    {
        id: 4,
        imagem: "../publico/imagens/cadeado.png",
        nome: "Polar shirt",
        valor: 150
    }

]

let result = "";

window.onload = () => {
    let quantidade = document.getElementById("quantidade").innerText;
    if (quantidade == 1) {
        document.getElementById("botao-menos").disabled = true;
    }

    let idProduto = window.location.href.split("?")[1];

    result = produto.find((item) => item.id == idProduto)


    populaProduto(result)

   
}


function populaProduto(obj) {
    document.getElementById("nome-produto").innerText = result.nome;
    document.getElementById("imagem-produto").src = result.imagem;
    document.getElementById("valor-produto").innerText = "R$ " + result.valor;
    let valorParcelado = result.valor/ 3;
    document.getElementById("valor-parcelado").innerText = "Ou em até 3x de R$ " + valorParcelado + " sem juros."
}


function adicionar() {
    numero += 1;
    document.getElementById("quantidade").innerText = numero;
    if (numero == 1) {
        document.getElementById("botao-menos").disabled = true;
    }
    else {
        document.getElementById("botao-menos").disabled = false;
    }

}

function excluir() {
    numero = numero - 1;
    document.getElementById("quantidade").innerText = numero;
    if (numero == 1 || numero < 1) {
        document.getElementById("botao-menos").disabled = true;
    }
    else {
        document.getElementById("botao-menos").disabled = false;
    }


}










