/* ////// INSTRUÇÕES //////

Necessitamos uma função produto que receba um array de números e retorne o produto: o resultado de multiplicar todos os elementos entre si.

Por exemplo, produto([1, 4, 7]) deve retornar 28, que é 1 * 4 * 7. 
Escreva a função produto

*/

////// SOLUÇÃO //////

function produto(arrayLista) {
    let fatores = 1;
    for (valor of arrayLista) {
      fatores *= valor;
    }
    return fatores;
}   

console.log(produto([1, 4, 7]));