function tabuada() {
    var num = document.querySelector('#inum').value
    var tab = document.querySelector('#itab')

    if (num.length == 0) {
        alert("por favor digite um numero")
    }else {
        num = Number(num)
        var c = 1
        tab.innerHTML = ""
        while (c <= 10) {
            var item  = document.createElement('option')

            item.text = `${num} x ${c} = ${num*c}`
            tab.appendChild(item)
            c++
        }
    }
}