interface Humano {
    nome: string,
    idade? : number,
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