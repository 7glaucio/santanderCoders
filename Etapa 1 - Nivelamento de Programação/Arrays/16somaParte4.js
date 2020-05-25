/* Ainda não está convencido? Tente novamente, todas as 5 expressões seguintes no terminal utilizando o console.log:

Lembre-se de declarar a função lucroTotal exemplificada acima(não se preocupe, você pode copiar igual o exemplo).

lucroTotal([])
lucroTotal([100])
lucroTotal([100, 2])
lucroTotal([2, 10, -20])
lucroTotal([2, 10, -20, 0, 0, 10, 10]) */

function lucroTotal(umPeriodo) {
    var soma= 0;
    var mes = 0;
    for (var i=0; i<umPeriodo.length; i++) {
      mes = umPeriodo[i];
      soma= soma+ mes;
    }
    return soma;
  }
  
  console.log(lucroTotal([]));
  console.log(lucroTotal([100]));
  console.log(lucroTotal([100, 2]));
  console.log(lucroTotal([2, 10, -20]));
  console.log(lucroTotal([2, 10, -20, 0, 0, 10, 10]));
  