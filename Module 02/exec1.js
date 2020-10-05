// Exercicio 1
let count = 0;
let app = document.querySelector("#app");
let botao = document.querySelector(".botao");
botao.style.cssText = `
    margin: 10px 0 ;
`

botao.onclick = function () {
    app.style.cssText = `
    display: flex;
    flex-wrap: wrap;

    `
    let square = document.createElement("div");

    if (count < 1088) {
        square.setAttribute('class', 'square')
        square.style.cssText = `
    width: 50px;
    height: 50px;
    margin: 10px 0;
    background-color: hotpink;
    `;
        app.insertAdjacentElement("afterbegin", square);
        count++;

        square.onmouseover = function () {
            square.style.backgroundColor = getRandomColor();
        }
    }
    else {
        alert("Please, remove one squate before.")
    }
}

let removeSquare = document.createElement('button');
removeSquare.textContent = "Remove Square";
app.insertAdjacentElement("beforebegin", removeSquare);

removeSquare.onclick = function () {
    if (count >= 1) {
        let square = document.querySelector("div.square");
        app.removeChild(square);
        count--;
    } else {
        alert("Please, add some squares before remove it.")
    }
}
// FIM Exercicio 1