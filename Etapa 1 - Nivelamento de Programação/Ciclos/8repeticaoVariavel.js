// Sabendo disso, escreva uma função somar5MoedasDe25Centavos, que adiciona o valor de 5 moedas de 0,25 centavos e retorna o resultado.

var moedas = 0;

function somar5MoedasDe25Centavos() {
    for(var i = 0; i < 5; i++) {
    moedas = moedas + 0.25; 
   }
    return moedas;
}

