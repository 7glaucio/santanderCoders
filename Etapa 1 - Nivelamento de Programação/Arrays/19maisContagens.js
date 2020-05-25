// Escreva a função quantidadeDeMesesComPerda. A estrutura da função é semelhante às que temos feito, vamos lá! Para lhe ajudar já iniciamos a função para você, você só precisa preencher as lacunas.

function quantidadeDeMesesComPerda(umPeriodo) {
    let quantidade = 0;
    for (let mes=0; mes< umPeriodo.length; mes++) {
      if (umPeriodo[mes] < 0){
        quantidade = quantidade+1;
      }    
    }
    return quantidade;
  }
  console.log(quantidadeDeMesesComPerda([10,5,10]));