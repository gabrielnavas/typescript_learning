"use strict";
// let & const
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
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
// function normalComThis() {
//     console.log(this);
// }
/*  o this na função normalComThis tera o valor do objeto,
    e retorna para a variavel normalComThisEspecial
    aqui o this varia
*/
// const normalComThisEspecial = normalComThis.bind({ nome: 'gabriel' });
// normalComThisEspecial();
// this, funcao com arrow
/* na função arrowComThis, o this é sempre o mesmo.
    aqui o this é sempre o mesmo do contexto no qual foi escrito.
*/
// const arrowComThis = () => console.log(this);
// arrowComThis();
// parâmetro padrão
function contagemRegressiva(inicio, fim) {
    if (inicio === void 0) { inicio = 3; }
    if (fim === void 0) { fim = inicio + 2; }
    console.log('início', inicio);
    console.log('fim', fim);
}
contagemRegressiva(3, 5);
contagemRegressiva();
// Rest & Spread
var numbers = [1, 10, 99, -5];
console.log(Math.max.apply(Math, numbers)); // ...numbers = 1,10,99,-5
var turmaA = ['Gabriel', 'João', 'Maria'];
// ['Gabriel', 'João', 'Maria','Geovana', 'Larissa', 'Ana']
var turmaB = __spreadArrays(['Geovana', 'Larissa', 'Ana'], turmaA);
console.log(turmaB);
// ['Gabriel', 'João', 'Maria','Geovana', 'Larissa', 'Ana', 'Gabriel', 'João']
var turmaC = __spreadArrays(turmaA, turmaB);
console.log(turmaC);
// quantidade de parametros fixos
function retornarArrayFixo(arg1, arg2) {
    return [arg1, arg2];
}
var numerosFixos = retornarArrayFixo(1, 2);
console.log(numerosFixos);
// quantide de parametros dinâmicos
function retornarArrayDinamico() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
var numerosDinamicos = retornarArrayDinamico(1, 2, 3, 4, 5, 6, 7, 10, 20, 30);
console.log(numerosDinamicos);
// parametros tupla Rest & Spread
function tuplaParam() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return "string => " + args[0] + " boolean => " + args[1] + " number => " + args[2];
}
var stringTupled = tuplaParam('gabriel', true, 27);
console.log(stringTupled);
// destructuring (array)
var caracteristicas = ['Motor Zetec 1.8', 2020];
var motor = caracteristicas[0], ano = caracteristicas[1];
console.log(motor, ano);
// destructuring (objeto)
var item = {
    nome: 'SSD 480GB',
    preco: 200,
    caracteristicas: {
        importado: true
    }
};
var Sou_Um_Alias = item.nome, importado = item.caracteristicas.importado;
var preco = item.preco;
console.log(Sou_Um_Alias); // 'SSD 480GB'
console.log(importado); // 'true'
// template string
var primeiroNome = 'gabriel';
var segundoNome = "navas";
var nomeCompleto = "\n    " + primeiroNome + " " + segundoNome + "\n    " + (primeiroNome.length + segundoNome.length > 0 ?
    'nome grandao!!' :
    'nome não definido') + "\n";
console.log(nomeCompleto);
var modoRuimDeLer = primeiroNome + ' ' + segundoNome;
// Exercicio 1
var dobro = function (valor) {
    return valor * 2;
};
console.log(dobro(10));
// Exercicio 2
var dizerOla = function (nome) {
    if (nome === void 0) { nome = 'pessoa'; }
    console.log("Ola, " + nome);
};
dizerOla();
dizerOla("Anna");
// Exercicio 3 menor valor
var nums = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, nums));
// Exercicio 4
var array = [55, 20];
nums.forEach(function (n) { return array.push(n); });
//ou
nums.push.apply(nums, nums);
console.log(array);
// Exercicio 5
var notas = [8.5, 6.3, 9.4];
var nota1 = notas[0], nota2 = notas[1], nota3 = notas[2];
console.log(nota1, nota2, nota3);
var cientista = { primeiroNome2: "Will", experiencia: 12 };
var primeiroNome2 = cientista.primeiroNome2, experiencia = cientista.experiencia;
console.log(primeiroNome, experiencia);
// Callback
function esperar3s() {
    setTimeout(function () {
        console.log('3s depois');
    }, 3000);
}
esperar3s();
//# sourceMappingURL=ecmascript.js.map