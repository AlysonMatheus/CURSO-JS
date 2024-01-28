function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fabo.value.length == 0|| Number (fano.value) > ano){
        window.alert('[ERRO] Verifique os dados novamente!')
    }else{
        var fsex = document.getElementsByClassName('radsex')
        var idade = ano - Number(fano.value)
        var gemerp = ''
        if (fsex[0].checked){
            genero = 'Homem'
        } else if (fsex[1].checked){
            genero = "Mulher"
        }
        res.innerHTML =
    }
}