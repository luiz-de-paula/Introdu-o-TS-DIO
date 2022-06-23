"use strict";
let button = document.getElementById("button");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
function adicionarNumeros(num1, num2, devPrintar, frase) {
    let resultado = num1 + num2;
    if (devPrintar) {
        alert(frase + resultado);
    }
    return num1 + num2;
}
let devPrintar = true;
let frase = 'O valor é: ';
button === null || button === void 0 ? void 0 : button.addEventListener('click', () => {
    if (input1 && input2) {
        alert(adicionarNumeros(Number(input1.value), Number(input2.value), devPrintar, frase));
    }
});
