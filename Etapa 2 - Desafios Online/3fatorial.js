/* ////// INSTRUÇÕES //////

Escreva uma função fatorial, que calcule o fatorial de um número. */

////// SOLUÇÃO //////

function fatorial(n) {
    let calculo = 1;
    for (let i = 2; i <= n; i++) {
          calculo = calculo * i;
      }
      return calculo;
  }
  
  console.log(fatorial(5));