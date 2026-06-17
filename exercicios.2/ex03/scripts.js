function calcular() {
    let n1 = document.getElementById('num1')
    let n2 = document.getElementById('num2')
    let opc = document.getElementById('op')
    let resultado = document.getElementById('res')

    let opcional = Number(opc.value)

    
    if (opcional == 5) {
        document.body.innerHTML = '<h1>Obrigada! Volte sempre.</h1>';
        return;
    }

    if (n1.value === '' || n2.value === '' ) {
        resultado.innerHTML = '<p style="color: red;">Digite um número válido</p>'
        return
    }

    let numero1 = Number(n1.value)
    let numero2 = Number(n2.value)
    



    if (opc.value === '' || opcional < 1 || opcional > 5) {
        resultado.innerHTML = '<span style="color: red;">Digite uma opção válida</span>'
        return
    }

    if (opcional == 1) {
        let soma = numero1 + numero2
        resultado.innerHTML = `A soma dos números ${numero1} + ${numero2} é igual a ${soma}`
    }

    else if (opcional == 2) {
        let sub = numero1 - numero2
        resultado.innerHTML = `A subtração dos números ${numero1} - ${numero2} é igual a ${sub}`
    }

    else if (opcional == 3) {
        let mult = numero1 * numero2
        resultado.innerHTML = `A multiplicação dos números ${numero1} * ${numero2} é igual a ${mult}`
    }

    if (opcional == 4 && numero2 == 0) {
    resultado.innerHTML = '<p style="color: red;">Não é possível dividir por zero.</p>'
    return
    }

    else if (opcional == 4) {
        let div = numero1 / numero2 
        resultado.innerHTML = `A divisação dos números ${numero1} / ${numero2} é igual a ${div}`
    } 
}