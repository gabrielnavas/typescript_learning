"use strict";
function saudarComOla(pessoa) {
    console.log('Olá, ' + pessoa.nome);
    console.log(`tenho ${pessoa.idade} anos`);
    console.log(`e tenho uma OBS: ${pessoa.obs}.`);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Joana';
}
const pessoa = {
    nome: 'João',
    idade: 27,
};
// saudarComOla(pessoa);
saudarComOla({ nome: 'gabriel', idade: 27, obs: 'sou um attr dinâmico' });
//# sourceMappingURL=interfaces.js.map