function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 6 && hora < 12){
        img.src = 'img/dia.png'
        document.body.style.background = '#ff6100'
    }else if(hora >= 12 && hora <= 18){
        img.src = 'img/tarde.png'
        document.body.style.background = '#c15755'
    }else{
        img.src = 'img/noite.png'
        document.body.style.background = '#4a6570'
    }
}