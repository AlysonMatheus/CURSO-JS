function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()

 
msg.innerHTML = `Agora são ${hora} horas` 
if (hora >= 0 && hora < 12){
    // BOM DIA!
    img.src = 'fotoamanha.jpg'
    document.body.style.background = '#4FA3CD'
} else if (hora >= 12 && hora < 18){
    //BOA TARDE!
    img.src = 'fototarde.jpg'
    document.body.style.background = '#ABA6AB'
} else{
    //BOA NOITE!
    img.src = 'fotonoite.jpg'
    document.body.style.background = '#051014'
}

}
