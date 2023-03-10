window.onload = () => {

    const produto = [
        {
            id: 1,
            imagem: "../publico/Tênis/new Balance/tiago-preto.png",
            nome: "New Blance Tiago Lemos",
            valor: 600,
            cor: "preto",
            tamanhos: [38,39,40,42]
            
        },
        {
            id: 002,
            imagem: "../publico/Roupas/calca-verde.png",
            nome: "Calça Chino",
            valor: 450,
            cor: "verde",
            tamanhos: [38,40,42]
        },
        {
            id: 003,
            imagem: "../publico/Roupas/polar-marrom.jpg",
            nome: "Polar shirt",
            valor: 300,
            cor: "marrom",
            tamanhos: ["p", "g"]
        },
        {
            id: 004,
            imagem: "../publico/Tênis/nike/dunk-marrom.png",
            nome: "nike Dunk",
            valor: 150,
            cor: "azul",
            tamanhos: ["m","gg"]
        }

     
    ]

    

    function createDiv(obj) {
        let container = document.getElementById("container");
    
        let newProduct = document.createElement("div");
        newProduct.classList.add("produto");
    
        let displayFlex = document.createElement("div");
        displayFlex.classList.add("display-flex");
        newProduct.appendChild(displayFlex);

        let imgProduct = document.createElement("img");
        imgProduct.src = obj.imagem;
        displayFlex.appendChild(imgProduct);

        let divInf = document.createElement("div");
        divInf.classList.add("margin-left")
        divInf.appendChild(createElement_("p" , obj.nome));
        divInf.appendChild(createElement_("p" , obj.cor));
        divInf.appendChild(createElement_("p" , "quantidade produto")); 
        displayFlex.appendChild(divInf);

        let valueProduct = document.createElement("div");
        valueProduct.classList.add("valor-produto")
        valueProduct.appendChild(createElement_("p" ,"R$ " + obj.valor));
        let buttonDelet = document.createElement("p")
        buttonDelet.classList.add("margin-left")
        buttonDelet.innerText = "X";
        valueProduct.appendChild(buttonDelet)
        newProduct.appendChild(valueProduct)

        document.getElementById("valor-total").innerText = "R$ " + obj.valor

    
         container.appendChild(newProduct)

    }

    //função que cria um elemento e da um valor a ele.
    function createElement_(element, text) {
        let elemento = document.createElement(element);
        elemento.innerText = text;
    
        return elemento
    }

    
    //chamando a função de criar os produtos.
    createDiv(produto[1])    

}



