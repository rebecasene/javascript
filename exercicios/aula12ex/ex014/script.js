function carregar() {
let msg = document.getElementById('msg')
let img = document.getElementById('imagem')
let data = new Date()
let hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
msg.style.textAlign='center'

if (hora >= 0 && hora < 12) {
    img.src = 'manha.png'
    document.body.style.background = '#94c8ec'

} else if (hora >= 12 && hora <= 18){
    img.src = 'tarde-18.png'
    document.body.style.background = '#EF674A'
} else {
    img.src = 'noite.png'
    document.body.style.background = '#2A2831'
}
img.style.display='block'
img.style.margin='auto'
}