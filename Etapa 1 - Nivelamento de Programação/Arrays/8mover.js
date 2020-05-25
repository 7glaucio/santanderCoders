// Declarar uma função chamada “mover”, que recebe dois arrays, remove o último elemento do primeiro e adiciona-o ao segundo.

var umArray = [1, 2, 3];
var outroArray = [4, 5];

function mover (umArray, outroArray) {
    outroArray.push(umArray.pop());
}