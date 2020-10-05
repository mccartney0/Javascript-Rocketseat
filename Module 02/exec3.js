// Exercicio 3
let listElement = document.querySelector("#list")

var nomes = ["Diego", "Gabriel", "Lucas"];
let nomesTotais = 0;
for (let i = 0; i < nomes.length; i++) {
    let list = document.createElement("ul")
    list.textContent = nomes[i];
    listElement.appendChild(list)
    nomesTotais++;
}
// FIM Exercicio 3