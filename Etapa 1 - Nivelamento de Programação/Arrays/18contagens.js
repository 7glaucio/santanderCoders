// Complete a função quantidadeDeMesesComLucro. Se você prestar atenção, notará que tem uma estrutura semelhante ao problema anterior

function quantidadeDeMesesComLucro(umPeriodo) {
    let quantidade = 0;
    for (let mes=0; mes< umPeriodo.length; mes++) {
      if (umPeriodo[mes] > 0){
        quantidade = quantidade+1;
      }    
    }
    return quantidade;
  }
  console.log(quantidadeDeMesesComLucro([10,5,10]));