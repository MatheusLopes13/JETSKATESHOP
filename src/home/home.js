window.onload = () => {
    

    const produto = [
        // {
        // imagem: "./src/publico/imagens/cadeado.png",
        // nome: "tiago lemos",
        // valor: "R$ 500,00 "
        // },
         {
            imagem: "./src/publico/imagens/cadeado.png",
            nome: "Calça Chino",
            valor: "450,00"
        },
        {
            imagem: "./src/publico/imagens/cadeado.png",
            nome: "Polar shirt",
            valor: "R$ 30,00"
        },
        {
            imagem: "./src/publico/imagens/cadeado.png",
            nome: "Polar shirt",
            valor: "R$ 456,00"
        }
        

    ]



    produto.forEach(item => createDiv(item))



    function createDiv (obj) {
        let container = document.getElementById("novidades");
        let newDiv = document.createElement("div");
        newDiv.classList.add("produto");

        let imagem = document.createElement("img");
        imagem.src = obj.imagem;
        newDiv.appendChild(imagem);
        newDiv.appendChild(createElement_("p", obj.nome));
        newDiv.appendChild(createElement_("p",obj.valor));
        let botao = document.createElement("button");
        botao.innerHTML = "comprar";
        newDiv.appendChild(botao);

        
        imagem.onmouseover = () => {
            imagem.classList.add("efeitoHover");
        }

        imagem.onmouseleave = () => {
            imagem.classList.remove("efeitoHover");
        }

        container.appendChild(newDiv)

        
    }

    function createElement_(element, text){
        let elemento = document.createElement(element);
        elemento.innerText = text;
        
        return elemento
    }


}






