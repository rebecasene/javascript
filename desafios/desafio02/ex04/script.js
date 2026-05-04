function contar() {
    let num1 = document.getElementById('n1')
    let num2 = document.getElementById('n2')
    let resultado = document.getElementById('r')

    if (num1.value.length == 0 || num2.value.length == 0) {
        alert('[ERRO] Preencha todos os campos!')
    } else {
       let numero1 = Number(num1.value)
       let numero2 = Number(num2.value)

        resultado.innerHTML=''
        let c = 0
        while (c <= numero2) {
            resultado.innerHTML += `${numero1} x ${c} = ${numero1*c} <br>`
            c++
        } 
    }
}