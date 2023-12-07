const buttonDugme = document.getElementById("dugme")

function zapreminaValjka() {
    const poluprecnikR = document.getElementById("r")
    const visinaH = document.getElementById("h")
    const spanResenje = document.getElementById("resenje")
    resenje = Number(poluprecnikR.value) * Number(poluprecnikR.value) * Math.PI * Number(visinaH.value)
    spanResenje.innerText = resenje.toFixed(3)
}

buttonDugme.onclick = zapreminaValjka
