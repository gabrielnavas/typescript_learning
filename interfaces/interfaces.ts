interface Humano {
    nome: string,
    idade?: number,
    [prop: string]: any,
    saudar(sobrenome: string): void;
}

function saudarComOla(pessoa: Humano) {
    console.log('Olá, ' + pessoa.nome);
    console.log(`tenho ${pessoa.idade} anos`);
    console.log(`e tenho uma OBS: ${pessoa.obs}.`);
}

function mudarNome(pessoa: Humano) {
    pessoa.nome = 'Joana';
}

const pessoa: Humano = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome: string): void {
        console.log(`Olá meu nome é Mr ${sobrenome}, ${this.nome}`)
    }
}
// saudarComOla(pessoa);
// saudarComOla({nome: 'gabriel', idade: 27, obs: 'sou um attr dinâmico'});

pessoa.saudar('Navas');


// usando classes


class Cliente implements Humano {
    nome: string = '';
    ultimaCompra: Date = new Date();
    saudar(sobrenome: string) {
        console.log(`Olá meu nome é ${this.nome} ${sobrenome}`);
    }
}

const meuCliente = new Cliente();
meuCliente.nome = 'Han';
meuCliente.saudar('Solo');
console.log(meuCliente.ultimaCompra);



// interface Função
interface FuncaoCalculo {
    (a: number, b: number): number;
}

let potencia: FuncaoCalculo;
potencia = function (base: number, expoente: number): number {

    //opção 1
    // return Math.pow(base, expoente);

    //opção 2
    // return base ** expoente

    //opção 3
    return Array(expoente).fill(base).reduce((total, value) => total * value);
}

console.log(potencia(2, 6));



// Herança

interface A {
    a(): void;
}

interface B {
    b(): void;
}

interface ABC extends A, B {
    a(): void;
    b(): void;
}

class RealA implements A {
    a(): void { };
}

class RealAB implements A, B {
    a(): void { };
    b(): void { };
}

class RealABC implements ABC {
    a(): void { }
    b(): void { }
    c(): void { }
}

abstract class AbstrataABD implements A, B {
    a(): void { }
    b(): void { }

    abstract d(): void;
}


//extends objects

interface Object {
    log(): void;
}


Object.prototype.log = function () {
    console.log(this.toString());
}

const x = 2;
const y = 3;
const z = 4;

x.log();
y.log();
z.log();


const cliente = { nome: 'Gabriel', toStrong() { return this.nome; } }
cliente.log();