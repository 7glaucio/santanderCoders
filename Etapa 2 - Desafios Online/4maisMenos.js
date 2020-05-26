/* ////// INSTRUÇÕES //////

Necessitamos uma função maisMenos que receba um array e retorne outro com os seguintes três números:

na primeira posição, a fração de números que são positivos
na segunda posição, a fração de números que são zero
na última posição, a fração de números que são negativos
Por exemplo, maisMenos([1, 2, 0, -1]) deveria retornar [0.5, 0.25, 0.25], devido a que há 50% de positivos, 25% de zeros, e 25% de negativos.

Escreva a função maisMenos.
 */

////// SOLUÇÃO //////

function maisMenos(arrayLista) {

    filtrado = []

    let positivo = arrayLista.filter((item) => item > 0)
    let zeros = arrayLista.filter((item) => item == 0)
    let negativos = arrayLista.filter((item) => item < 0)

    filtrado[0] = (positivo.length / arrayLista.length)
    filtrado[1] = (zeros.length / arrayLista.length)
    filtrado[2] = (negativos.length / arrayLista.length)

    return filtrado
}

console.log(maisMenos([0, 0, 0, 0]));