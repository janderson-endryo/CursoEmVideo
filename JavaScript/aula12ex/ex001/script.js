function carregar() {

    var msg = document.querySelector('#msg')
    var img = document.querySelector('#imagens')

    var agora = new Date()
    var hora = agora.getHours()

    msg.innerHTML = `agora sao ${hora} horas`

    if (hora >=0 && hora < 12) {

        img.src = 'estilos/imagens/manha.jpg'
        document.body.style.background = '#e2cd9f'

    } else if (hora >= 12 && hora <= 18) {

        img.src = 'estilos/imagens/tarde.jpg'
        document.body.style.background = '#b9846f'

    } else {
        img.src = 'estilos/imagens/noite.jpg'
        document.body.style.background = '#515154'
    }
    

}

