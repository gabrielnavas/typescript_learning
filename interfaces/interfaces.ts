interface Humano {
    nome: string,
    idade? : number,
    [prop: string]: any,
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
}
// saudarComOla(pessoa);
saudarComOla({nome: 'gabriel', idade: 27, obs: 'sou um attr dinâmico'});
