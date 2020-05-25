// Escreva a função eNumeroDaSorte que, recebendo um número, diz a se é um número da sorte. Lembre-se de que o número deve obedecer às três condições mencionadas. Seu desafio adicional será: NÃO use o if.

function eNumeroDaSorte (a) {
    return (a > 0) && ((a % 2 == 0) || (a % 3 == 0)) && (a != 15);
}