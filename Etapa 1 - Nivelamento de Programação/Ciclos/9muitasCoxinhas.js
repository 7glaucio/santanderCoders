// Sabendo disso, escreva uma função somarMoedasDe25(quantidadeDeMoedas), que toma como parâmetro um valor numérico e retorna a soma das moedas de 25 centavos. 

function somarMoedasDe25(quantidadeDeMoedas) {
    let moedas = 0;
    for(var i = 0; i < quantidadeDeMoedas; i++) {
    moedas = moedas + 0.25; 
   }
    return moedas;
}

