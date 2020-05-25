// Escreva a função saldoDeMesesComLucro. Você pode usar a mesma estrutura do exercício dos exercícios anteriores, porém não tão rápido! Mas lembre-se que esta função precisa retornar um array.

function saldoDeMesesComLucro(umPeriodo) {
    let mesesPositivos = [];
    for (let mes = 0; mes< umPeriodo.length; mes++) {
      if (umPeriodo[mes] > 0){
         mesesPositivos.push(umPeriodo[mes]);
      }    
    }
    return mesesPositivos;
  }
  console.log(saldoDeMesesComLucro([100, 20, 0, -10, 10]));