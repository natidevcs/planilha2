function fizzbuzz(numero) {
    let mensagem = ""
    if (numero % 3 ===0) {
        mensgem += "Fizz"
    }
    if (numero % 5 ===0) {
        mensagem += "Buzz"
    }
    if (mensagem.length ===0) {
        mensagem = String(numero)
    }
    return mensagem
}

for (let i = 0; i <= 20; i++) {
    const mensagem = fizzbuzz(i)
    console.log(mensagem)
}