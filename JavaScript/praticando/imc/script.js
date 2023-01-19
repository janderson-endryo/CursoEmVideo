function verificar() {

    var peso = document.querySelector('input#peso').value
    var altura= document.querySelector('input#altura').value
    var res = document.querySelector('div#res')

    //var peso = Number(txtpp.value)

    //var altura = Number(txtal.value)
    
    var imc = (peso) / (altura*altura)

    res.innerHTML = `o seu peso e ${peso} kilos  sua altura e ${altura} metros e seu imc e ${imc.toFixed(2) } `

    if (imc < 18.5) {
        res.innerHTML += `voce esta abaixo do seu peso normal`

    } else if (imc < 25) {
        res.innerHTML += `voce esta com seu peso normal`

    } else if (imc < 30) {
        res.innerHTML += `voce esta com excessor de peso`

    } else if (imc < 35) {
        res.innerHTML += `voce esta com obesidade classe 1`

    } else if (imc < 40) {
        res.innerHTML += `voce esta com obesidade classe 2`

    } else if (imc >= 40) {
        res.innerHTML += `voce esta com obesidade classe 3`
    }



    

}
