
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

// @logarClass
// @logarClasseSe(false)
// @factoryDecorator({ a: 'Olá ', b: 2 })
@logarObjeto
class Eletrodomestico {

    constructor() {
        console.log('novo....')
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

new Eletrodomestico();
new Eletrodomestico();
new Eletrodomestico();
