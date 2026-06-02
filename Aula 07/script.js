function apertou() {
    const userInput = document.querySelector("#nome").value

    alert(userInput)
}

function calculo(operacao) {
    const valueA = document.querySelector("#valueA").value
    const valueB = document.querySelector("#valueB").value

    if (isNaN(valueA) && isNaN(valueB)) {
        return alert("Você não inseriu um número")
    }

    let resultado = 0;

    if (operacao == "+") {
        resultado = Number(valueA) + Number(valueB)
    } else if (operacao == "-") {
        resultado = Number(valueA) - Number(valueB)
    } else if (operacao == "*") {
        resultado = Number(valueA) * Number(valueB)
    } else if (operacao == "/") {
        resultado = Number(valueA) / Number(valueB)
    }

    alert(`O resultado e: ${resultado}`)
}