let form = document.querySelector("#formulario")
const result = document.querySelector("#resultado")

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const nome = document.querySelector("#nome").value;
    const sobrenome = document.querySelector("#sobrenome").value;
    const idade = document.querySelector("#idade").value;
    const profissao = document.querySelector("#profissao").value;

    if (!nome && !sobrenome && !idade && !profissao) return result.innerHTML = `ERRO: Preencha todos os campos corretamente`
    if (isNaN(idade)) return result.innerHTML = `ERRO: Coloque um número valido em Idade`

    result.innerHTML = `BEM VINDO ${nome} ${sobrenome}, VOCÊ TEM ${idade} ANOS E TRABALHA COM ${profissao}`
})