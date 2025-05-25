function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 20 //data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >=0 && hora <12) {
        // BOM DIA!
        img.src = 'amanha.png'
        document.body.style.background = '#f6c184'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = 'tarde.png'
        document.body.style.background = '#eef94a'
    } else {
        // BOA NOITE!
        img.src = 'Noite.png'
        document.body.style.background = '#284263'
    }
}


