// Escreva a função contem(array, numero) que nos diz se um array contém um determinado elemento.

function contem (array, numero) {
    if (array.indexOf(numero) != -1) {
        return true;
    } else {
        return false;
    }
}

console.log(contem([1, 6, 7, 6], 7));