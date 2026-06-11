const result = document.querySelector("#resultado")

const soma = document.querySelector("#soma")
const subtracao = document.querySelector("#subtracao")
const multiplicacao = document.querySelector("#multiplicacao")
const divisao = document.querySelector("#divisao")

function obterValores() {
    const valueA = Number(document.querySelector("#valuea").value)
    const valueB = Number(document.querySelector("#valueb").value)

    return {a: valueA, b: valueB}
}

soma.addEventListener('click', (e) => {
    e.preventDefault()
    const valores = obterValores()
    return result.innerHTML = `Resultado da Soma: ${valores.a + valores.b}`
})

subtracao.addEventListener('click', (e) => {
    e.preventDefault()
    const valores = obterValores()
    return result.innerHTML = `Resultado da Sutração: ${valores.a - valores.b}`
})

multiplicacao.addEventListener('click', (e) => {
    e.preventDefault()
    const valores = obterValores()
    return result.innerHTML = `Resultado da Multiplicação: ${valores.a * valores.b}`
})

divisao.addEventListener('click', (e) => {
    e.preventDefault()
    const valores = obterValores()
    return result.innerHTML = `Resultado da Divisão: ${valores.a / valores.b}`
})
