"use strict";
// let & const
var _this = this;
//exemplo 1
var seraQuePode;
console.log(seraQuePode);
seraQuePode = '?';
//exemplo 2
var estaFrio = true;
if (estaFrio) {
    var acao = 'Colocar o casaco!';
}
// console.log(acao); //compila
// Arrow Function
var somar = function (n1, n2) {
    return n1 + n2;
};
console.log(somar(2, 2));
var subtrair = function (n1, n2) { return n1 - n2; };
console.log(subtrair(4, 1));
var saudacao = function () { return console.log('Olá'); };
saudacao();
var falarCom = function (pessoa) { return console.log('Olá ' + pessoa); };
falarCom('João');
//this, funcao sem arrow
function normalComThis() {
    console.log(this);
}
/*  o this na função normalComThis tera o valor do objeto,
    e retorna para a variavel normalComThisEspecial
    aqui o this varia
*/
var normalComThisEspecial = normalComThis.bind({ nome: 'gabriel' });
normalComThisEspecial();
// this, funcao com arrow
/* na função arrowComThis, o this é sempre o mesmo.
    aqui o this é sempre o mesmo do contexto no qual foi escrito.
*/
var arrowComThis = function () { return console.log(_this); };
arrowComThis();
// parâmetro padrão
function contagemRegressiva(inicio, fim) {
    if (inicio === void 0) { inicio = 3; }
    if (fim === void 0) { fim = inicio + 2; }
    console.log('início', inicio);
    console.log('fim', fim);
}
contagemRegressiva(3, 5);
contagemRegressiva();
//# sourceMappingURL=ecmascript.js.map