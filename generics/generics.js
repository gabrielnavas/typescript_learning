"use strict";
function echo(objeto) {
    return objeto;
}
// console.log(echo('João').length);
// console.log(echo(27).length);
// console.log(echo({nome: 'João', idade: 27}));
// Usando Generics
function echoMelhorado(objeto) {
    return objeto;
}
function echoMelhorado2(objeto) {
    return objeto;
}
console.log(echoMelhorado('João').length);
console.log(echoMelhorado2(27).toString());
console.log(echoMelhorado({ nome: 'João', idade: 27 }).nome);
// Generics disponíveis na API
const avaliacoes = [10, 9.3, 7.7];
// avaliacoes.push('43');
avaliacoes.push(43);
console.log(avaliacoes);
// Array
function imprimir(args) {
    args.forEach(elem => console.log(elem));
}
imprimir([1, 2, 3, 4, 5]);
imprimir(['1', '2', '3', '4', '5']);
const alunos = [
    { nome: 'Gab1', idade: 32 },
    { nome: 'Gab2', idade: 31 },
    { nome: 'Gab3', idade: 34 },
];
imprimir(alunos);
const charmarEcho = echoMelhorado;
console.log(charmarEcho('Alguma coisa'));
// Class com Generics
class OperacaoBinaria {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}
class SomaBinaria extends OperacaoBinaria {
    executar() {
        return this.operando1 + this.operando2;
    }
}
const somaB = new SomaBinaria(1, 2);
console.log(somaB.executar());
class DiferencaEntreDatas extends OperacaoBinaria {
    getTime(data) {
        let { dia, mes, ano } = data;
        return new Date(`${mes}/${dia}/${ano}`).getTime();
    }
    executar() {
        const t1 = this.getTime(this.operando1);
        const t2 = this.getTime(this.operando2);
        const diferenca = Math.abs(t1 - t2);
        const dia = 1000 * 60 * 60 * 24;
        return `${Math.ceil(diferenca / dia)} dias(s)`;
    }
}
const data_1 = new Data(1, 2, 2020);
const data_2 = new Data(2, 2, 2020);
console.log(new DiferencaEntreDatas(data_1, data_2).executar());
//# sourceMappingURL=generics.js.map