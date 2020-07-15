
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
    construtor.prototype.imprimir = function() {
        console.log(this);
    }
}

// (<any>new Eletrodomestico()).imprimir();
const eletro = new Eletrodomestico();
eletro.imprimir && eletro.imprimir();