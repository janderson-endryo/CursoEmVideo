function contar() {
    var inic = document.querySelector('input#iinicio').value
    var fim = document.querySelector('input#ifim').value
    var pas = document.querySelector('input#ipasso').value

    var res = document.querySelector('div#res')

    if (inic.length == 0 || fim.length == 0 || pas.length == 0) {
        res.innerHTML = 'impossivel contar!'

    } else {
        res.innerHTML = "contando:"
        inic = Number(inic)
        fim = Number(fim)
        pas = Number(pas)
        
        
        if (pas <= 0) {
            alert("impossivel conta considere passo igua a 1")
            pas = 1
        }

        if (inic < fim) {
            
            for(inic; inic <= fim; inic += pas) {
                res.innerHTML += `${inic}\u{1f603}`
            }

        } else {

            for (inic ; inic >= fim; inic -=pas) {
                res.innerHTML += `${inic}\u{1f603}`
            }
            res.innerHTML += `\u{1f3c1}`
        }
        
    }
}