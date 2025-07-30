function calcular(input) {
    const tabela = input.closest("table"); // encontra a tabela atual

    const inputA = tabela.querySelector(".inputA");
    const inputB = tabela.querySelector(".inputB");
    const resultado = tabela.querySelector(".resultado");

    const valorA = parseFloat(inputA.value) || 0;
    const valorB = parseFloat(inputB.value) || 0;

    const ideb = (valorA * valorB).toFixed(1); // exemplo: soma

    resultado.textContent = ideb;
}

function calcular(input) {
    const tabela = input.closest("table");

    const inputA = tabela.querySelector(".inputA");
    const inputB = tabela.querySelector(".inputB");
    const resultado = tabela.querySelector(".resultado");

    const valorA = parseFloat(inputA.value) || 0;
    const valorB = parseFloat(inputB.value) || 0;

    const ideb = (valorA * valorB).toFixed(1);
    resultado.textContent = ideb;

    calcularMediaGeralNP();
    calcularMediaGeralAprovacao();
    calcularMediaGeralIdeb(); 
}

function calcularMediaGeralNP() {
    const resultados = document.querySelectorAll(".inputA");
    let soma = 0;
    let cont = 0;

    resultados.forEach(r => {
        const valor = parseFloat(r.value);
        if (!isNaN(valor) && valor > 0) {
            soma += valor;
            cont++;
        }
    });

    const media = cont > 0 ? (soma / cont).toFixed(2) : 0;
    document.getElementById("media-geral-np").textContent = media;
}

function calcularMediaGeralAprovacao() {
    const resultados = document.querySelectorAll(".inputB");
    let soma = 0;
    let cont = 0;

    resultados.forEach(r => {
        const valor = parseFloat(r.value);
        if (!isNaN(valor) && valor > 0) {
            soma += valor;
            cont++;
        }
    });

    const media = cont > 0 ? (soma / cont).toFixed(2) : 0;
    document.getElementById("media-geral-aprovacao").textContent = media;
}

function calcularMediaGeralIdeb() {
    const resultados = document.querySelectorAll(".resultado");
    let soma = 0;
    let cont = 0;

    resultados.forEach(r => {
        const valor = parseFloat(r.textContent);
        if (!isNaN(valor) && valor > 0) {
            soma += valor;
            cont++;
        }
    });

    const media = cont > 0 ? (soma / cont).toFixed(1) : 0;
    document.getElementById("media-geral-ideb").textContent = media;
}
