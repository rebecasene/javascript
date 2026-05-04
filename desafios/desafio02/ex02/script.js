function contar() {
    let num = document.getElementById('n')
    let resultado = document.getElementById('r')

    if (num.value.length == 0) {
        alert('[ERRO] Digite um número!')
    } else {
        let numero = Number(num.value)
        resultado.innerHTML = ''
        
        for (let c = numero; c >= 0; c--)
        resultado.innerHTML += `${c} `
    }
}