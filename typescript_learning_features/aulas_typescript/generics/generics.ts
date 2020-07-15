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









// Desafio Mapa
// Array de Objetos (Chave/Valor) -> itens
// Métodos: obter(Chave), colocar({C, V})
// Limpar(), imprimir()

class Mapa<Chave extends number, Valor extends string> {

    private _mapa: Array<{chave: Chave, valor: Valor}>;

    constructor(mapa: Array<{chave: Chave, valor: Valor}> = []) {
        this._mapa = mapa;
    }

    colocar(elem: {chave: Chave, valor: Valor}): void {
        
        const containsIndex = this._mapa.find( 
            elemMap => elemMap.chave === elem.chave
        );

        containsIndex !== undefined ?
            this._mapa[containsIndex.chave-1].valor = elem.valor :
            this._mapa.push(elem); 
    }

    obter(chave: Chave): {chave: Chave, valor: Valor} | null {
        const containsIndex = this._mapa.find( 
            elemMap => elemMap.chave === chave
        );

        return containsIndex !== undefined ?
            this._mapa[containsIndex.chave-1] : null;
    }

    remover(chave: Chave): boolean {
        const indexMap = this._mapa.findIndex( 
            elemMap => elemMap.chave === chave
        );

        if(indexMap === -1) {
            return false;
        }

        this._mapa.splice(indexMap, 1);
        return true;
    }

    limpar(): void {
        while(this._mapa.length > 0) {
            this._mapa.shift();
        }
    }

    imprimir(): void {
        console.log(this._mapa);
    }
}

const mapa = new Mapa();
mapa.colocar({chave: 1, valor: 'Gabriel'});
mapa.colocar({chave: 2, valor: 'Navas'});
mapa.colocar({chave: 3, valor: 'João'});
mapa.colocar({chave: 3, valor: 'Joaquim'});

mapa.imprimir();
console.log('obter item 1', mapa.obter(1));
console.log('obter item 2', mapa.obter(2));
console.log('obter item 3', mapa.obter(3));

console.log('remover item 2');
mapa.remover(2);
mapa.imprimir();

console.log('limpar tudo');
mapa.limpar();
mapa.imprimir();





// Desafio Mapa Implementação do Leo

type Par<C, V> = { chave: C, valor: V};

class MapaLeo<C, V> {

    itens: Array<Par<C, V>>;

    constructor() {
        this.itens = new Array<Par<C, V>>();
    }

    obter(chave: C): Par<C, V> | null {
        const resultado = this.itens
            .filter(i => i.chave === chave);

        return resultado ? resultado[0] : null;
    }

    colocar(par: Par<C, V>): void {
        const encontrado = this.obter(par.chave)

        if(encontrado) {
            encontrado.valor = par.valor;
        }
        else {
            this.itens.push(par)
        }
    }

    limpar() {
        this.itens = new Array<Par<C, V>>();
    }

    imprimir() {
        console.log(this.itens);
    }
}

console.log('implementações do Leo');

const mapaLeo = new MapaLeo<number, string>()
mapaLeo.colocar({ chave: 1, valor: 'Pedro' })
mapaLeo.colocar({ chave: 2, valor: 'Rebeca' })
mapaLeo.colocar({ chave: 3, valor: 'Maria' })
mapaLeo.colocar({ chave: 1, valor: 'Gustavo' })
 
console.log(mapaLeo.obter(2))
mapaLeo.imprimir()
mapaLeo.limpar()
mapaLeo.imprimir()