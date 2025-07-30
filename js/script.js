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

    calcularMediaGeral(); // chama sempre que qualquer valor for atualizado
}

function calcularMediaGeral() {
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
    document.getElementById("media-geral").textContent = media;
}
