function pares() {
    let num = document.getElementById('n')
    let resultado = document.getElementById('r')

    if (num.value.length == 0 || Number(num.value) == 1) {
        alert('[ERRO] Digite um número válido!')
    } else {
        let numero = Number(num.value)
        resultado.innerHTML = ''

        for (c = 1; c <= numero; c++)
            if (c % 2 == 0) {
                resultado.innerHTML += `${c} <br>`
            } 
    }
}