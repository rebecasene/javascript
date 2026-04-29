    function verificar() {
        let data = new Date()
        let ano = data.getFullYear()
        let fano = document.getElementById('a')
        let resultado = document.getElementById('r')

        if (fano.value.length == 0 || Number(fano.value) > ano) {
            alert('[ERRO] Verifique os dados e tente novamente!')
        } else {
            let fsex = document.getElementsByName('sexo')
            let idade = ano - Number(fano.value)
            let genero = ''
            let img = document.createElement('img')
            img.setAttribute('id', 'foto')
            if (fsex[0].checked) {
                genero = 'Homem'
                if (idade >= 0 && idade < 10) {
                    img.setAttribute('src', 'foto-bb-m.png')
                } else if (idade >= 10 && idade < 21) {
                    img.setAttribute('src', 'foto-jovem-m.png')
                } else if (idade >= 21 && idade < 50) {
                    img.setAttribute('src', 'foto-adulto-m.png')
                } else {
                    img.setAttribute('src', 'foto-idoso-m.png')
                }

            } else if (fsex[1].checked) {
                genero = 'Mulher' 
                if (idade >= 0 && idade < 10) {
                    img.setAttribute('src', 'foto-bb-f.png')
                } else if (idade >= 10 && idade < 21) {
                    img.setAttribute('src', 'foto-jovem-f.png')
                } else if (idade >= 21 && idade < 50) {
                    img.setAttribute('src', 'foto-adulto-f.png')
                } else {
                    img.setAttribute('src', 'foto-idoso-f.png')
                }
                }
                resultado.style.textAlign = 'center'
                resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.<br>` 
                resultado.appendChild(img)
            } 
        
    }

