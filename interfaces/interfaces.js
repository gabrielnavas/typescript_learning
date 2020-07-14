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
    saudar(sobrenome) {
        console.log(`Olá meu nome é Mr ${sobrenome}, ${this.nome}`);
    }
};
// saudarComOla(pessoa);
// saudarComOla({nome: 'gabriel', idade: 27, obs: 'sou um attr dinâmico'});
pessoa.saudar('Navas');
// usando classes
class Cliente {
    constructor() {
        this.nome = '';
        this.ultimaCompra = new Date();
    }
    saudar(sobrenome) {
        console.log(`Olá meu nome é ${this.nome} ${sobrenome}`);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = 'Han';
meuCliente.saudar('Solo');
console.log(meuCliente.ultimaCompra);
//# sourceMappingURL=interfaces.js.map