// @logarClass
// @logarClasseSe(false)
@factoryDecorator({ a: 'Olá ', b: 2 })
class Eletrodomestico {

    constructor() {
        console.log('novo....')
    }
}

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