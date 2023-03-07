window.onload = () => {


    const produto = [
        {
            id: 1,
            imagem: "./src/publico/imagens/cadeado.png",
            nome: "Tiago Lemos",
            valor: 600
        },
        {
            id: 002,
            imagem: "./src/publico/imagens/cadeado.png",
            nome: "Calça Chino",
            valor: 450,
          
        },
        {
            id: 003,
            imagem: "./src/publico/imagens/cadeado.png",
            nome: "Polar shirt",
            valor: 300
        },
        {
            id: 004,
            imagem: "./src/publico/imagens/cadeado.png",
            nome: "Polar shirt",
            valor: 150
        }


    ]

    

    produto.forEach(item => createDiv(item))



    function createDiv(obj) {
        let container = document.getElementById("novidades");
        let newDiv = document.createElement("div");
        newDiv.classList.add("produto");

        let imagem = document.createElement("img");
        imagem.src = obj.imagem;

        newDiv.appendChild(imagem);

        newDiv.appendChild(createElement_("p", obj.nome));
        newDiv.appendChild(createElement_("p", "R$ " + obj.valor));
        let botao = document.createElement("button");
        botao.innerHTML = "comprar";
        botao.addEventListener("click", ()=> window.location.href = "./src/produto/produto.html?"+ obj.id )
        newDiv.appendChild(botao);



        imagem.onmouseover = () => {
            imagem.classList.add("efeitoHover");
        }

        imagem.onmouseleave = () => {
            imagem.classList.remove("efeitoHover");
        }

        container.appendChild(newDiv)


    }

        


    
    function createElement_(element, text) {
        let elemento = document.createElement(element);
        elemento.innerText = text;

        return elemento
    }


}






