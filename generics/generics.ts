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

    abstract executar(): R;
}

class SomaBinaria extends OperacaoBinaria<number, number> {

    executar(): number {
        return this.operando1 + this.operando2;
    }

}

const somaB = new SomaBinaria(1, 2);
console.log(somaB.executar());


class DiferencaEntreDatas extends OperacaoBinaria<Data, string> {

    getTime(data: Data): number {
        let { dia, mes, ano } = data
        return new Date(`${mes}/${dia}/${ano}`).getTime();
    }

    executar(): string {
        const t1 = this.getTime(this.operando1);
        const t2 = this.getTime(this.operando2);
        const diferenca = Math.abs(t1 - t2);
        const dia = 1000 * 60 * 60 * 24;
        return `${Math.ceil(diferenca / dia)} dias(s)`;
    }
}

// const data_1 = new Data(1, 2, 2020);
// const data_2 = new Data(2, 2, 2020);

// console.log(new DiferencaEntreDatas(data_1, data_2).executar())



// Desafio Classe Fila
// Atributos fila (Array)
// Métodos: entrar, proximo, imprimir


class Fila<T> {

    private _fila: Array<T>;

    constructor(args: Array<T> = []) {
        const copyArr = [...args];
        this._fila = copyArr;
    }

    entra(elem: T): void {
        this._fila.push(elem);
    }

    proximo(): T | null {

        if(this._fila.length === 0) {
            return null;
        }

        const newArr = this._fila.splice(0, 1);
        const primeiroElem = newArr[0];

        return primeiroElem;
    }

    imprimir(): void {
        console.log('Fila agora', this._fila);
    }

    get fila(): Array<T> {
        return this.fila;
    }
}


const fila = new Fila();
fila.entra(3);
fila.entra(1);
fila.entra(2);
fila.imprimir();
console.log('próximo', fila.proximo());
console.log('próximo', fila.proximo());
console.log('próximo', fila.proximo());
fila.imprimir();






// Restrições (Constraints) //
class ClassA {
    atributo: number = 1;
}

class ClassB extends ClassA {
    atributo: number = 1;
}

class ClassC<T extends ClassB> {
    atributo: T;

    constructor(atributo: T) {
        this.atributo = atributo;
    }
} 

const objC = new ClassC<ClassA>(new ClassA());
console.log(objC.atributo);