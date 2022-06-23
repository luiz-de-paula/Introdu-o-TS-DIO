"use strict";
const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissão: 'desenvolvedora'
};
const andre = {
    nome: 'Andre',
    idade: 28,
    profissão: 'pintor'
};
const mario = {
    nome: 'Mario',
    idade: 28,
    profissão: 'pintor de rodapé'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Porteiro"] = 1] = "Porteiro";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["JogadorDeFutebol"] = 3] = "JogadorDeFutebol";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 32,
    profissao: Profissao.Desenvolvedora
};
const Mariana = {
    nome: 'Mariana',
    idade: 32,
    materias: ['matematica, ingles']
};
function listar(lista) {
    for (const item of lista) {
        console.log(`-`, item);
    }
}
listar(Mariana.materias);
