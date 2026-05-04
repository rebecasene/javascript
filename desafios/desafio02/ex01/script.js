function contar() {
    let num = document.getElementById('n')
    let resultado = document.getElementById('r')

    if (num.value.length == 0) {
        alert('[ERRO] Favor digitar um número!')
    } else {
        numero = Number(num.value)
        resultado.innerHTML = ''
        for (c = 0; c <= numero; c++)
           resultado.innerHTML += `${c} `
    }
}