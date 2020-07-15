
function logarClass(construtor: Function) {
    console.log(typeof construtor);
}

function decoratorVazio(_: Function) {
}

function logarClasseSe(valor: boolean) {
    return valor ? logarClass : decoratorVazio;
}

function factoryDecorator(obj: { a: string, b: number }) {
    return function (construtor: Function): void {
        console.log(obj.a + ' ' + obj.b);
    }
}



type Construtor = { new(...args: any[]): {} }


function logarObjeto(construtor: Construtor) {
    console.log('Carregado...')
    return class extends construtor {
        constructor(...args: any[]) {
            console.log('Antes...')
            super(args);
            console.log('Depois...')
        }
    }
}


interface Eletrodomestico {
    imprimir?(): void;
}

// @logarClass
// @logarClasseSe(false)
// @factoryDecorator({ a: 'Olá ', b: 2 })
// @logarObjeto
@imprimivel
class Eletrodomestico {

    constructor() {
        console.log('novo....')
    }
}


function imprimivel(construtor: Function) {
    construtor.prototype.imprimir = function () {
        console.log(this);
    }
}

// (<any>new Eletrodomestico()).imprimir();
const eletro = new Eletrodomestico();
eletro.imprimir && eletro.imprimir();








// Desafio Decorator perfilAdmin
const usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: true
}

@perfilAdmin
class MudancaAdministrativa {
    critico() {
        console.log('Algo crítico foi alterado!')
    }
}

new MudancaAdministrativa().critico()

function perfilAdmin<T extends Construtor>(construtor: T) {
    return class extends construtor {
        constructor(...args: any[]) {
            super(...args);
            if (!usuarioLogado || !usuarioLogado.admin) {
                throw new Error('Sem permissao');
            }
        }
    }
}



// Decorator Método
class ContaCorrente {
    private _saldo: number;

    constructor(saldo: number) {
        this._saldo = saldo;
    }

    @congelar
    sacar(valor: number) {
        if (valor <= this._saldo) {
            this._saldo -= valor;
            return true;
        }

        return false;
    }

    @congelar
    getSaldo(): number {
        return this._saldo
    }
}

const cc = new ContaCorrente(10248.57)
cc.sacar(5000)
console.log(cc.getSaldo());

cc.getSaldo = function () {
    return this['_saldo'] + 7000;
}

console.log(cc.getSaldo());

// Decorator para método
// Object.freeze()
function congelar(alvo: any, nomeMetodo: string,
    descritor: PropertyDescriptor) {
    console.log('alvo', alvo);
    console.log('nome metodo', nomeMetodo);
    descritor.writable = false;
}