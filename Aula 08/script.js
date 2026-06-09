const spanResult = document.querySelector("#resultado")

function showResult() {
    const nome = document.querySelector("#nome").value;
    const sobrenome = document.querySelector("#sobrenome").value;
    const idade = document.querySelector("#idade").value;
    const profissao = document.querySelector("#profissao").value;
    spanResult.innerHTML = `BEM VINDO ${nome} ${sobrenome}, VOCÊ TEM ${idade} ANOS E TRABALHA COM ${profissao}`
}