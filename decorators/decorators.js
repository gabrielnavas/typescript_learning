"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logarClass(construtor) {
    console.log(typeof construtor);
}
function decoratorVazio(_) {
}
function logarClasseSe(valor) {
    return valor ? logarClass : decoratorVazio;
}
function factoryDecorator(obj) {
    return function (construtor) {
        console.log(obj.a + ' ' + obj.b);
    };
}
function logarObjeto(construtor) {
    console.log('Carregado...');
    return class extends construtor {
        constructor(...args) {
            console.log('Antes...');
            super(args);
            console.log('Depois...');
        }
    };
}
// @logarClass
// @logarClasseSe(false)
// @factoryDecorator({ a: 'Olá ', b: 2 })
// @logarObjeto
let Eletrodomestico = class Eletrodomestico {
    constructor() {
        console.log('novo....');
    }
};
Eletrodomestico = __decorate([
    imprimivel
], Eletrodomestico);
function imprimivel(construtor) {
    construtor.prototype.imprimir = function () {
        console.log(this);
    };
}
// (<any>new Eletrodomestico()).imprimir();
const eletro = new Eletrodomestico();
eletro.imprimir && eletro.imprimir();
// Desafio Decorator perfilAdmin
const usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: true
};
let MudancaAdministrativa = class MudancaAdministrativa {
    critico() {
        console.log('Algo crítico foi alterado!');
    }
};
MudancaAdministrativa = __decorate([
    perfilAdmin
], MudancaAdministrativa);
new MudancaAdministrativa().critico();
function perfilAdmin(construtor) {
    return class extends construtor {
        constructor(...args) {
            super(...args);
            if (!usuarioLogado || !usuarioLogado.admin) {
                throw new Error('Sem permissao');
            }
        }
    };
}
// Decorator Método
class ContaCorrente {
    constructor(saldo) {
        this._saldo = saldo;
    }
    sacar(valor) {
        if (valor <= this._saldo) {
            this._saldo -= valor;
            return true;
        }
        return false;
    }
    getSaldo() {
        return this._saldo;
    }
}
__decorate([
    naoNegativo
], ContaCorrente.prototype, "_saldo", void 0);
__decorate([
    congelar
], ContaCorrente.prototype, "sacar", null);
__decorate([
    congelar
], ContaCorrente.prototype, "getSaldo", null);
const cc = new ContaCorrente(10248.57);
cc.sacar(5000);
console.log(cc.getSaldo());
cc.getSaldo = function () {
    return this['_saldo'] + 7000;
};
console.log(cc.getSaldo());
// Decorator para método
// Object.freeze()
function congelar(alvo, nomeMetodo, descritor) {
    console.log('alvo', alvo);
    console.log('nome metodo', nomeMetodo);
    descritor.writable = false;
}
// Decorator para atributo
function naoNegativo(alvo, nomePropriedade) {
    delete alvo[nomePropriedade]; //tira propriedade
    //add propriedade get set
    Object.defineProperty(alvo, nomePropriedade, {
        get: function () {
            return alvo["_" + nomePropriedade];
        },
        set: function (valor) {
            if (valor < 0) {
                throw new Error('Saldo Inválido');
            }
            else {
                alvo["_" + nomePropriedade] = valor;
            }
        }
    });
}
//# sourceMappingURL=decorators.js.map