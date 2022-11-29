let horas = document.getElementById("horas")
let inpMinutos = document.getElementById("minutos")
let inpHorasSomaSub = document.getElementById("horasSomaSub")
let inpMinutosSomaSub = document.getElementById("minutosSomaSub")
let inpDivMulti = document.getElementById("diviMulti")
let divRes = document.getElementById("res")


function converter(hora, minutos) {
    let horaConv = hora.value * 60
    let resultado = parseInt(minutos.value) + parseInt(horaConv)
    return resultado
}

function somar() {
    let m1 = converter(horas, inpMinutos)
    let m2 = converter(inpHorasSomaSub, inpMinutosSomaSub)
    let res = (m1 + m2) / 60
    let min = res % 1
    let horasInt = parseInt(res)
    let minConv = parseInt((min * 0.6) * 100)

    divRes.innerHTML = `<p>O resultado é de ${horasInt} horas e ${minConv} minutos.</p>`
    }
function subtrair() {
    let m1 = converter(horas, inpMinutos)
    let m2 = converter(inpHorasSomaSub, inpMinutosSomaSub)
    let res = (m1 - m2) / 60
    let min = res % 1
    let horasInt = parseInt(res)
    let minConv = parseInt((min * 0.6) * 100)

    divRes.innerHTML = `<p>O resultado é de ${horasInt} horas e ${minConv} minutos.</p>`
}

function multiplicar() {
    let m1 = converter(horas, inpMinutos)
    let res = (m1 * parseInt(inpDivMulti.value)) / 60
    let min = res % 1
    let horasInt = parseInt(res)
    let minConv = parseInt((min * 0.6) * 100)
    divRes.innerHTML = `<p>O resultado é de ${horasInt} horas e ${minConv} minutos.</p>`
}

function dividir() {
    let m1 = converter(horas, inpMinutos)
    let res = (m1 / parseInt(inpDivMulti.value)) / 60
    let min = res % 1
    let horasInt = parseInt(res)
    let minConv = parseInt((min * 0.6) * 100)
    divRes.innerHTML = `<p>O resultado é de ${horasInt} horas e ${minConv} minutos.</p>`
}
