
const tabela = document.querySelector("tr")
let cadastro =  {matricula:[], nome:[], nota:[]}



function add () {
    
    var m = document.querySelector("#imat").value
    var n = document.querySelector("#itexto").value
    var nn = document.querySelector("#inota").value
    cadastro.matricula.push(m)
    cadastro.nome.push(n)
    cadastro.nota.push(nn)
    ele(m,n,nn)

}

function ele(matricula,nome,nota) {
    var ln = document.createElement("td")
    ln.innerHTML += ` ${matricula}`
    ln.innerHTML += `<br>${nome}`
    if(nota >= 7) {
        ln.innerHTML += `<br> sua nota foi ${nota} <br>voce foi aprovado`
    }else if (nota >=5 ) {
        ln.innerHTML += `<br> sua nota foi ${nota} <br>voce foi para recuperaçao`
    } else if (nota >=4) {
        ln.innerHTML += `<br> sua nota foi ${nota} <br>voce foi para final`
    } else if (nota < 4) {
        ln.innerHTML += `<br> sua nota foi ${nota} <br> voce foi reprovado`
    }

    var f = tabela.firstChild
    tabela.insertBefore(ln,f)

    
}

    

