

const produto = [
    {
        id: 1,
        imagem: "../publico/Tênis/New Balance/tiago-preto.png",
        nome: "Tiago lemos",
        valor: 600,
        cor: "preto",
        tamanhos: [38, 39, 40, 42]

    },
    {
        id: 2,
        imagem: "../publico/Roupas/calca-verde.png",
        nome: "Calça Chino",
        valor: 450,
        cor: "verde",
        tamanhos: [38, 40, 42]
    },
    {
        id: 3,
        imagem: "../publico/Roupas/polar-marrom.jpg",
        nome: "Polar shirt",
        valor: 300,
        cor: "marrom",
        tamanhos: ["p", "g"]

    },
    {
        id: 4,
        imagem: "../publico/Roupas/polar-azul.png",
        nome: "Polar shirt",
        valor: 150,
        cor: "azul",
        tamanhos: ["m", "gg"]
    }

]



window.onload = () => {
    let imgPrincipal = document.getElementById("imagem-produto");
    let imgOne = document.getElementById("img-one");
    let imgTwo = document.getElementById("img-two");
    let imgTre = document.getElementById("img-tre");

imgOne.onmouseover = () => {
     imgPrincipal.src = imgOne.src
}

imgTwo.onmouseover = () => {
     imgPrincipal.src = imgTwo.src
    
}

imgTre.onmouseover = () => {
    imgPrincipal.src = imgTre.src
}



    let quantidade = document.getElementById("quantidade").innerText;
    if (quantidade == 1) {
        document.getElementById("botao-menos").disabled = true;
    }

    let idProduto = window.location.href.split("?")[1];

    result = produto.find((item) => item.id == idProduto)


    populaProduto(result)

    createSizes(result.tamanhos)

}







function populaProduto(obj) {
    document.getElementById("nome-produto").innerText = result.nome;
    document.getElementById("cor-produto").innerText = result.cor;
    document.getElementById("imagem-produto").src = result.imagem;
    let imgOne = document.getElementById("img-one").src = result.imagem
    document.getElementById("img-one").src = result.imagem;

    document.getElementById("valor-produto").innerText = "R$ " + result.valor;
    let valorParcelado = result.valor / 3;
    document.getElementById("valor-parcelado").innerText = "Ou em até 3x de R$ " + valorParcelado + " sem juros."
}

function createSizes(arr) {
    let container = document.getElementById("container");

    let sizes = document.createElement("div");
    sizes.classList.add("tamanhos");
    container.appendChild(sizes)

    arr.forEach(item => {
        let button = document.createElement("button")
        button.innerText = item;
        sizes.appendChild(button)

        button.onmouseover = () => {
            button.classList.add("cursor-sizes")
        }

        button.onmouseleave = () => {
            button.classList.remove("cursor-sizes")
        }
    });

}

// função que troca as imagens na tela.





// Funções que adicionam e excluem quantidade de produtos.

let numero = 1;

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
    if (numero == 1) {
        document.getElementById("botao-menos").disabled = true;
    }
    else {
        document.getElementById("botao-menos").disabled = false;
    }


}










