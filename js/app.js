// Capturando elementos do DOM
const input = document.querySelector(".input");
const erro = document.querySelector(".erro");
const listaAtividades = document.querySelector(".lista_atividades");
const botaoAdicionar = document.querySelector(".botao_adc");
const botaoLimparTodos = document.querySelector(".botao_del_todos");

// Função para cadastrar nova atividade
function cadastraAtividade() {
    if (input.value.length > 3) {
        erro.style.display = "none";
        criaAtividade(input.value);  // Agora a atividade será criada
    } else {
        erro.style.display = "grid";
        erro.innerHTML = `${input.value} não é uma atividade válida!`;
    }
    limpaInput();
}

// Função para limpar o campo de input
function limpaInput() {
    input.value = "";
}

// Função para criar uma nova atividade na lista
function criaAtividade(atividadeTexto) {
    const atividade = document.createElement("div");
    atividade.classList.add("atividade");

    const tituloAtividade = document.createElement("h2");
    tituloAtividade.textContent = atividadeTexto;

    const botaoDeletar = document.createElement("button");
    botaoDeletar.textContent = "Limpar";
    botaoDeletar.classList.add("botao_del");

    // Evento para remover a atividade
    botaoDeletar.addEventListener("click", () => {
        listaAtividades.removeChild(atividade);
    });

    atividade.appendChild(tituloAtividade);
    atividade.appendChild(botaoDeletar);
    listaAtividades.appendChild(atividade);
}

// Função para limpar todas as atividades
botaoLimparTodos.addEventListener("click", () => {
    listaAtividades.innerHTML = "";
});

// Evento para adicionar atividade com Enter
window.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        cadastraAtividade();
    }
});

// Evento para adicionar atividade ao clicar no botão "+"
botaoAdicionar.addEventListener("click", () => {
    cadastraAtividade();
});
