// Exercicio 4
let inputNames = document.querySelector("input[name=nome]");
let btnAddNomes = document.createElement("button");
btnAddNomes.textContent = "Add";
btnAddNomes.onclick = function () {
    let text = inputNames.value;
    inputNames.value = '';
    add(text);
}

listElement.insertAdjacentElement("beforebegin", btnAddNomes)

function add(nome) {
    nomes.push(nome);
        console.log(nomes)
        let lista = document.createElement("ul")
            lista.remove()
        for (let i = 0; i < nomes.length; i++) {
            
            lista.textContent = nomes[i];
            listElement.appendChild(lista)
        }

};

// FIM Exercicio 4