function somar() {
    let num = document.getElementById('n')
    let resultado = document.getElementById('r')

    if (num.value.length == 0) {
        alert('[ERRO] Digite um número!')
    } else {
        let numero = Number(num.value)
        resultado.innerHTML = ''

        let soma = 0
        let c = 1

        while (c <= numero) {
            soma += c
            
            if (c < numero) {
                resultado.innerHTML += `${c} + `
            } else {
                resultado.innerHTML += ` ${c}`
            }
            c++
        }
        resultado.innerHTML += ` = ${soma}`
    }
}