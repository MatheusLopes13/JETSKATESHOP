window.onload = () => {

    const produto = [
        {
            id: 1,
            imagem: "../publico/Tênis/new Balance/tiago-preto.png",
            nome: "New Blance Tiago Lemos",
            valor: 600,
            cor: "preto",
            
        },
        {
            id: 002,
            imagem: "../publico/Roupas/calca-verde.png",
            nome: "Calça Chino",
            valor: 450,
            cor: "verde"
        },
        {
            id: 003,
            imagem: "../publico/Roupas/polar-marrom.jpg",
            nome: "Polar shirt",
            valor: 300,
            cor: "marrom"
        },
        {
            id: 004,
            imagem: "../publico/Tênis/nike/dunk-marrom.png",
            nome: "nike Dunk",
            valor: 150,
            cor: "azul"
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

    
         container.appendChild(newProduct)

    }

    function createElement_(element, text) {
        let elemento = document.createElement(element);
        elemento.innerText = text;
    
        return elemento
    }

    createDiv(produto[0])    

}



