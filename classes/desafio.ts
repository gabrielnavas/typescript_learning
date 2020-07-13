// Exercício 1 - Classe
class Moto {

    public velocidade: number;

    constructor(
        public nome: string = '',
    ) {
        this.velocidade = 0;
    }

    buzinar(): void {
        console.log('Toooooooooooot!');
    }

    acelerar(delta: number): void {
        this.velocidade = this.velocidade + delta;
    }
}

const moto = new Moto('Ducati');
moto.buzinar();
console.log(moto.velocidade)
moto.acelerar(30);
console.log(moto.velocidade)




// Exercício 2 - Herança
abstract class Objecto2D {

    constructor(
        public base: number = 0,
        public altura: number = 0
    ) { }

    abstract area(): number;
}

class Retangulo extends Objecto2D {

    constructor(
        base: number = 0,
        altura: number = 0,
    ) {
        super(base, altura);
    }

    public area(): number {
        return this.base * this.altura;
    }
}

const retangulo: Objecto2D = new Retangulo(5, 7);
console.log((retangulo as Retangulo).area())





// Exercício 3 - Getters & Setters

class Estagiario {

    constructor(
        public _primeiroNome: string = '',
    ) { }

    get primeiroNome(): string {
        return this._primeiroNome
    }

    set primeiroNome(primeiroNome: string) {
        primeiroNome.length >= 3 ? this._primeiroNome = primeiroNome : '';
    }
}

const estagiario = new Estagiario('Gab');

console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Le'
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Leonardo'
console.log(estagiario.primeiroNome)