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
//# sourceMappingURL=generics.js.map