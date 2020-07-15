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
// const data_1 = new Data(1, 2, 2020);
// const data_2 = new Data(2, 2, 2020);
// console.log(new DiferencaEntreDatas(data_1, data_2).executar())
// Desafio Classe Fila
// Atributos fila (Array)
// Métodos: entrar, proximo, imprimir
class Fila {
    constructor(args = []) {
        const copyArr = [...args];
        this._fila = copyArr;
    }
    entra(elem) {
        this._fila.push(elem);
    }
    proximo() {
        if (this._fila.length === 0) {
            return null;
        }
        const newArr = this._fila.splice(0, 1);
        const primeiroElem = newArr[0];
        return primeiroElem;
    }
    imprimir() {
        console.log('Fila agora', this._fila);
    }
    get fila() {
        return this.fila;
    }
}
const fila = new Fila();
fila.entra(3);
fila.entra(1);
fila.entra(2);
fila.imprimir();
console.log('próximo', fila.proximo());
console.log('próximo', fila.proximo());
console.log('próximo', fila.proximo());
fila.imprimir();
// Restrições (Constraints) //
class ClassA {
    constructor() {
        this.atributo = 1;
    }
}
class ClassB extends ClassA {
    constructor() {
        super(...arguments);
        this.atributo = 1;
    }
}
class ClassC {
    constructor(atributo) {
        this.atributo = atributo;
    }
}
const objC = new ClassC(new ClassA());
console.log(objC.atributo);
// Desafio Mapa
// Array de Objetos (Chave/Valor) -> itens
// Métodos: obter(Chave), colocar({C, V})
// Limpar(), imprimir()
class Mapa {
    constructor(mapa = []) {
        this._mapa = mapa;
    }
    colocar(elem) {
        const containsIndex = this._mapa.find(elemMap => elemMap.chave === elem.chave);
        containsIndex !== undefined ?
            this._mapa[containsIndex.chave - 1].valor = elem.valor :
            this._mapa.push(elem);
    }
    obter(chave) {
        const containsIndex = this._mapa.find(elemMap => elemMap.chave === chave);
        return containsIndex !== undefined ?
            this._mapa[containsIndex.chave - 1] : null;
    }
    remover(chave) {
        const indexMap = this._mapa.findIndex(elemMap => elemMap.chave === chave);
        if (indexMap === -1) {
            return false;
        }
        this._mapa.splice(indexMap, 1);
        return true;
    }
    limpar() {
        while (this._mapa.length > 0) {
            this._mapa.shift();
        }
    }
    imprimir() {
        console.log(this._mapa);
    }
}
const mapa = new Mapa();
mapa.colocar({ chave: 1, valor: 'Gabriel' });
mapa.colocar({ chave: 2, valor: 'Navas' });
mapa.colocar({ chave: 3, valor: 'João' });
mapa.colocar({ chave: 3, valor: 'Joaquim' });
mapa.imprimir();
console.log('obter item 1', mapa.obter(1));
console.log('obter item 2', mapa.obter(2));
console.log('obter item 3', mapa.obter(3));
console.log('remover item 2');
mapa.remover(2);
mapa.imprimir();
console.log('limpar tudo');
mapa.limpar();
mapa.imprimir();
//# sourceMappingURL=generics.js.map