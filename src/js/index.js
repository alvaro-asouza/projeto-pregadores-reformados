// OBJETIVO 1

// Passo 1
const botoes = document.querySelectorAll(".botao");

// OBJETIVO 2 
//passo 1 
const pregador = document.querySelectorAll(".pregador");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        desselecionarBotao();
        desselecionarPregador();

        botao.classList.add("selecionado");
        pregador[indice].classList.add("selecionado");

    });
});



function desselecionarPregador() {
    const pregadorselecionado = document.querySelector(".pregador.selecionado");
    pregadorselecionado.classList.remove("selecionado");
};

function desselecionarBotao() {
    const botaoselecionado = document.querySelector(".botao.selecionado");
    botaoselecionado.classList.remove("selecionado");
};

