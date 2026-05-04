function contar() {
let num = document.getElementById('n')
let resultado = document.getElementById('r')

if (num.value.length == 0) {
    alert('[ERRO] Digite um número válido!')

} else {
    let numero = Number(num.value)
    
    resultado.innerHTML=''

    for (let c = 1; c <= numero; c++) {
        let dobro = c * 2
        resultado.innerHTML += `${c} -> ${dobro} <br>`

        }

    }

}