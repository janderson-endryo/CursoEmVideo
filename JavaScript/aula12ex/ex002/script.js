function  verificar() {
    var data = new Date()
    var ano = data.getFullYear()

    var fano = document.querySelector('#txtano')

    var res = document.querySelector('#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('{erro} verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('sexo')

        var idade = ano - Number(fano.value)
        
        var genero =''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')


        if (fsex[0].checked) {
            genero ='homem'
            if (idade >= 00 && idade < 10) {
                img.setAttribute ('src','estilos/imagens/foto-bebe-m.png')
            } else if (idade < 21) {
                img.setAttribute ('src','estilos/imagens/foto-jovem-m.png')
            } else if (idade < 50) {
                img.setAttribute ('src','estilos/imagens/foto-adulto-m.png')
            } else {
                img.setAttribute ('src','estilos/imagens/foto-idoso-m.png')
            }

        }else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 00 && idade < 10) {
                img.setAttribute ('src','estilos/imagens/foto-bebe-f.png')
            } else if (idade < 21) {
                img.setAttribute ('src','estilos/imagens/foto-jovem-f.png')
            } else if (idade < 50) {
                img.setAttribute ('src','estilos/imagens/foto-adulto-f.png')
            } else {
                img.setAttribute ('src','estilos/imagens/foto-idoso-f.png')
            }
        }
        res.innerHTML = `detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}