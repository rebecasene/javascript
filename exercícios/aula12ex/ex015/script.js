    function verificar() {
        let data = new Date()
        let ano = data.getFullYear()
        let fano = document.getElementById('a')
        let resultado = document.getElementById('r')

        if (fano.value.length == 0 || Number(fano.value) > ano) {
            alert('[ERRO] Verifique os dados e tente novamente!')
        } else {
            let fsex = document.getElementsByName('sexo')[1]
            let idade = ano - Number(fano.value)
           let genero = ''
           if ()
        }
    }