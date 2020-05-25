/* ////// INSTRUÇÕES //////

Uma professora de programação, cansada de que os estudantes cheguem tarde, decidiu que vai cancelar a aula se há poucos presentes.

Ela representa a entrada dos estudantes como um array de tempos de chegada tarde, em minutos. Por exemplo, se um estudante chegou 10 minutos atrasado, outro 5 minutos antes da hora, outro com 3 minutos de atraso, e outro pontual, poderá representar assim:

var alunosDaSegunda = [10, -5, 3, 0];
Com essa informação e a quantidade mínima de estudantes para que suceda o curso, a professora quer saber se a aula acontecerá. Por exemplo, supondo que a quantidade mínima de estudantes para que a aula aconteça é de 2 alunos, então o curso da segunda-feira se realizará, porque houve um estudante que foi pontual e um estudante que chegou cedo.

 acontece(alunosDaSegunda, 2)
true
Mas se a quantidade mínima fosse 3, a aula não aconteceria:

 acontece(alunosDaSegunda, 3)
false
Escreva as seguintes funções: 1. acontece, que diz se a aula sucederá de acordo com o array dos estudantes que entraram. 2. aberturas, que utiliza um array com os arrays dos estudantes que entraram nos outros dias, e a quantidade mínima de estudantes, e diga quais os dias em que as aulas aconteceram e quais não. Por exemplo:

aberturas([alunosDaSegunda, alunosDaTerça, alunosDaQuarta], 2)
[true, false, false] */

////// SOLUÇÃO //////

function acontece(arrayLista, numeroMinimo) {
    let pontuais = [];
    for (let i = 0; i < arrayLista.length; i++) {
        if (arrayLista[i] <= 0) {
            pontuais.push(arrayLista[i]);

        };
    };
    return pontuais.length >= numeroMinimo;
}

var alunosDaSegunda = [10, -5, 5, -2, 11, 3, 0];
console.log(acontece(alunosDaSegunda, 2));

var alunosDaTerca = [-2, 11, 3, 0]
var alunosDaQuarta = [-10, -5, 31, -2, -3, 0]

function aberturas(arraysDias, numeroMinimo) {
    let resultado = [];
    for (let i = 0; i < arraysDias.length; i++) {
        resultado.push(acontece(arraysDias[i], numeroMinimo));
    };
    return resultado
}

console.log(acontece([alunosDaSegunda, alunosDaTerca, alunosDaQuarta], 3))