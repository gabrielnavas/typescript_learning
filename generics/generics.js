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
    constructor(operando1, oeprando2) {
        this.operando1 = operando1;
        this.oeprando2 = oeprando2;
    }
    executar() {
        return this.operando1 + this.oeprando2;
    }
}
console.log(new OperacaoBinaria('Bom dia', 'dia').executar());
console.log(new OperacaoBinaria(3, 7).executar());
console.log(new OperacaoBinaria(3, ' Opa').executar());
//# sourceMappingURL=generics.js.map