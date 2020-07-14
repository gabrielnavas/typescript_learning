function echo(objeto: any) {
    return objeto;
}
// console.log(echo('João').length);
// console.log(echo(27).length);
// console.log(echo({nome: 'João', idade: 27}));


// Usando Generics
function echoMelhorado<T>(objeto: T): T {
    return objeto;
}

function echoMelhorado2<TIPO>(objeto: TIPO): TIPO {
    return objeto;
}


console.log(echoMelhorado<string>('João').length);
console.log(echoMelhorado2(27).toString());
console.log(echoMelhorado<{ nome: string, idade: number }>({ nome: 'João', idade: 27 }).nome);

// Generics disponíveis na API
const avaliacoes: Array<number> = [10, 9.3, 7.7];
// avaliacoes.push('43');
avaliacoes.push(43);
console.log(avaliacoes);


// Array

function imprimir<T>(args: T[]) {
    args.forEach(elem => console.log(elem));
}
imprimir<number>([1, 2, 3, 4, 5])
imprimir<string>(['1', '2', '3', '4', '5'])

type Aluno = {
    nome: string,
    idade: number
};

const alunos = [
    { nome: 'Gab1', idade: 32 },
    { nome: 'Gab2', idade: 31 },
    { nome: 'Gab3', idade: 34 },
];

imprimir<Aluno>(alunos)



// Tipo Genérico
type Echo = <T>(data: T) => T
const charmarEcho: Echo = echoMelhorado;
console.log(charmarEcho<string>('Alguma coisa'))


// Class com Generics

abstract class OperacaoBinaria<T, R> {
    constructor(public operando1: T, public operando2: T) { }

    abstract executar(): T;
    abstract log(): R;
}

class SomaBinaria extends OperacaoBinaria<number, string> {

    executar(): number {
        return this.operando1 + this.operando2;
    }

    log(): string {
        return `Esse valor da: ${this.operando1 + this.operando2}`;
    }
}

const somaB = new SomaBinaria(1,2);
console.log(somaB.executar());
console.log(somaB.log());
