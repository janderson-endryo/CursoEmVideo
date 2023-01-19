let num =document.querySelector('#inum')
let lista = document.querySelector('#ilista')
let res = document.querySelector('#res')

let valores = []


function jj (qualquervalor) {
    if (Number(qualquervalor) >= 1 &&  Number(qualquervalor) <= 100)  {
        return true
    } else {
        return false
    }
}

function inLista (n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true

    } else {
        return false
    }
}

function adicionar() {
    if(jj(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))

        let item = document.createElement('option')
        item.text = `valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ""
    } else {
        alert(`valor invalido ou ja encontrado em lista.`)
    }

    num.value =''
    num.focus()
}

function finalizar () {
    if (valores.length == 0 ) {
        alert("adicione valores")
    } else {
        let tol = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let pos in valores) {

            soma += valores[pos]
            
            if (valores[pos] > maior) 
                maior = valores[pos]

            if (valores[pos] < menor)
            menor = valores[pos]
            
        }

        media = soma/tol
        res.innerHTML = ""
        res.innerHTML +=  `<p> ao todo, temos ${tol} numeros cadastrados. </p>`
        res.innerHTML +=  `<p>o maior  valor  informado foi ${maior}</p>`
        res.innerHTML +=  `<p>o menor valor informado foi ${menor}</p>`
        res.innerHTML +=  `<p>a soma de todos os valores foi ${soma}</p>`
        res.innerHTML +=  `<p>a media e ${media}</p>`
    }
}