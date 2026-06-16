function verificar() {
    let n = document.getElementById('n1')
    let resultado = document.getElementById('res')

    if(n.value === "") {
        resultado.innerHTML = "Digite uma nota primeiro!"
        return
    }

    let nota = Number(n.value)

    if (nota < 0 || nota > 10) {
    resultado.innerHTML = "Digite uma nota entre 0 e 10."
    return
    }

    if (nota >= 7){
        resultado.innerHTML = `Sua nota foi de ${nota}, sendo assim você está APROVADA`
    }
    else if (nota >= 5 && nota < 7) {
        resultado.innerHTML = `Sua nota foi de ${nota}, sendo assim você está de RECUPERAÇÃO`
    } 
    else {
        resultado.innerHTML = `Sua nota foi de ${nota}, sendo assim você está REPROVADA`
    }
    
}