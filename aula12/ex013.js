var idade = 68
console.log(`Voce tem ${idade} anos`)
if(idade < 16){
    console.log('Não vota')
} else if(idade < 18 || idade > 67) {
    
    console.log('Voto opcional')
} else{
    console.log('Voto obrigatorio')
}

