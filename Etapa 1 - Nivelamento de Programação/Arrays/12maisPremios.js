/* Escreva a função “medalhaDeAcordoComPosto(numero)”, que recebe um número como parâmetro. Usando apenas o máximo de um “if” apenas. Talvez os arrays possam ser úteis aqui.

Você tem que devolver a medalha que corresponde às primeiras posições de uma competição:

 medalhaDeAcordoComPosto (1)
"ouro"
 medalhaDeAcordoComPosto (2)
"prata"
 medalhaDeAcordoComPosto (3)
"bronze"
medalhaDeAcordoComPosto (4)
"nada"
 medalhaDeAcordoComPosto (5)
"nada" */

var medalhas = ["ouro", "prata", "bronze", "nada"];

function medalhaDeAcordoComPosto(numero) {
    if (numero == 1) {
        return medalhas[0];
    } else if (numero == 2) {
        return medalhas[1];
    } else if (numero == 3) {
        return medalhas[2];
    } else {
        return "nada";
    }
};