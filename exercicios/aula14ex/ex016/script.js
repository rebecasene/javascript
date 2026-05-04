function gerar () {
    let num = document.getElementById('n')
    let tab = document.getElementById('t')
    
    if (num.value.length == 0) {
        alert('[ERRO] Digite um número válido')
    } else {
        numero = Number(num.value)
        tab.innerHTML =''
        
        for (let c = 0; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${numero} x ${c} = ${numero*c}`
            tab.appendChild(item)
        }
    }
}