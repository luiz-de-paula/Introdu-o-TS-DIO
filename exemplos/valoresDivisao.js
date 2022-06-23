"use strict";
function printaValores(num1, num2) {
    console.log(num1 + num2);
    // void retorno vazio(nada), console.log não retorna nada por isso e´uma funcao sem retorno
}
function somarValoresNumericos(num1, num2, callback) {
    let resultado = num1 + num2;
    return callback(resultado);
}
function raizQuadrada(num) {
    return num * num;
}
function dividirValores(num) {
    return num / num + num;
}
alert(dividirValores(3));
alert(somarValoresNumericos(4, 12, raizQuadrada));
