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
