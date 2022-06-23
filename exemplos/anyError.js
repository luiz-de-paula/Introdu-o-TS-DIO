"use strict";
let anyNovamente;
anyNovamente: 3;
anyNovamente: 'teste';
anyNovamente: 5;
let stringTeste = 'verificar ';
stringTeste = anyNovamente;
let unknownvalor;
unknownvalor: 3;
unknownvalor: 'agora vai';
unknownvalor: true;
unknownvalor: 'vai sim';
let stringTeste2 = 'Agora vai';
// stringTeste2 = unknownvalor 
if (typeof unknownvalor === 'string') {
    stringTeste2 = unknownvalor;
}
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogaErro('Voce errou', 500);
