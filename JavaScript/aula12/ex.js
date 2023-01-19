var agora = new Date()

var H = agora.getHours()

var m = agora.getMinutes()

var s = agora.getSeconds()

console.log(`agora sao exatemente ${H} horas ${m} minutos e ${s} segundos .`)

if (H < 12) {
    console.log('bom dia!')
}else if (H <= 18) {
    console.log('Boa tarde!')
}else { 
    console.log('Boa noite!')
}