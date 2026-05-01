function contar() {
    let inicio = document.getElementById("ini")
    let fim = document.getElementById('f')
    let passo = document.getElementById('pass')
    let resultado = document.getElementById('r')


    if (inicio.value.length == 0 ||fim.value.length == 0 || passo.value.length == 0) {
        resultado.innerHTML = 'Impossível contar.'
        alert('[ERRO] Faltam dados!')
       
    } else {
        resultado.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <=0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        if (i < f) {
            for (let c = i; c <= f; c+= p) {
            resultado.innerHTML += `${c} \u{1F449} `
        }
        
        } else {
            for (let c = i; c >= f; c-= p) {
                resultado.innerHTML += `${c} \u{1F449} `
            }
        }
        resultado.innerHTML += '\u{1F3c1}'
    }
    
}
 