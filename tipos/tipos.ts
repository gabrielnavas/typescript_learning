
//String

let nome: string = "João"
console.log(nome)
//nome = 28 => o tipo de nome é string



//number
let idade: number = 27;
//idade = 'ana' => o tipo de idade é number
idade = 27.5 //posso usar ponto flutuante

let decimal: number = 6
let hex: number = 0xf00d
let binary: number = 0b1010
let octal: number = 0o744


// boolean
let possuiHobbies: boolean = false;
// possuiHobbies = 1; // possuiHobbies é boolean, number não pode ser atribuido


// tipos explícitos
let minhaIdade: any
console.log(typeof minhaIdade) // => any

minhaIdade = 27 //tipo dinâmico
console.log(typeof minhaIdade) // => number

minhaIdade = 'gabriel'
console.log(typeof minhaIdade) // => string



// array
let hobbies: any[] = ["Cozinhar", 1, true]
console.log(typeof hobbies[0]) // => string
console.log(typeof hobbies[1]) // => number 
console.log(typeof hobbies[2]) // => boolean


let hobbiesTipados: string[] = ["Cozinhar", "praticar esportes"]
//hobbiesTipados.push(2); => error type
console.log(typeof hobbiesTipados[0]) // => string
console.log(typeof hobbiesTipados[1]) // => string 


// tuplas => array com tipos previamente definidos

//nesse caso, digo explicitamente que na variavel endereco eu quero uma string e um number
let endereco: [string, number] = ["Av Principa", 99]
console.log(typeof endereco[0]) // => string
console.log(typeof endereco[1]) // => number
// console.log(typeof endereco[2]) // => error, o tamanho definido do array é 2, pois so tem [string e number]


//enum
enum Cor {
    Cinza, // => 0
    Verde = 100, // => 100
    Azul, // => 101
    Marron = 3, // => 3
    Rosa = 500
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor) // => 100
console.log(Cor.Azul) // => 101
console.log(Cor.Marron) // => 3
console.log(Cor.Rosa) // => 500



// any
let carro: any = 'BMW'
console.log(carro) // => BMW

carro = { marca: 'BMW', ano: 2015 }
console.log(carro) // => {marca: BMW, ano: 2015}


// funções
function retornaNome(): string {
    // return idade; // error type, a função espera retornar uma tipo string
    return nome;
}
console.log(retornaNome()); // => João

function imprimeOlaMundo(): void {
    console.log('Olá mundo')
    // return 'olá mundo' // erro, void não retorna nada
}
imprimeOlaMundo();


function multiplicar(numA: number, numB: number): number {
    return numA * numB;
}
console.log(multiplicar(2.11111111111111111111111111111111, 2))
console.log(multiplicar(2.0, 2))


//funcao como tipo

//declaração
function souUmaFuncao(x: number, y: number): number {
    return x + y
}

//soma rece uma funcao que tem 2 param number e retorna um number
let soma: (x: number, y: number) => number;
soma = souUmaFuncao;

let soma2: (x1: number, x2: number) => number;
soma2 = souUmaFuncao;



// objetos

let usuario = {
    nome: 'João',
    idade: 26,
}

// usuario = {} tem que ser um objeto com os mesmo atributos e nome

// usuario = {
//     name: 'Maria',
//     age: 31,
// }

//atribuição explícita
let userTipado: { nome: string, idade: number } = {
    nome: 'João',
    idade: 24,
}

//agora eu posso mudar tranquilamente, desde que as chaves sejam as mesma.
userTipado = {
    nome: 'Gabriel',
    idade: 21,
}


//Desafio
/*
    Criar um objeto funcionário com:
        -- Array de strings com os nomes dos supervisores
        -- Função de bater ponto que recebe a hora e retorna uma string
            -> Ponto normal (<= 8)
            -> Fora do horário (> 8)

*/

let funcionario: { 
    superVisores: string[], 
    baterPonto: (horas: number) => string 
} = {
    superVisores: ['Ana', 'Fernando'],
    baterPonto(horario: number): string {
        if(horario <= 8) {
            return 'Ponto normal'
        }

        return 'Fora do horário';
    }
}

console.log(funcionario);
console.log(funcionario.baterPonto(3));
console.log(funcionario.baterPonto(9));

// funcionario = {} // não é possível





//Definindo Tipos já definidos sem classes
type Funcionario = {
    superVisores: string[],
    baterPonto: (horas: number) => string,
}

// console.log(Funcionario); // Não é possível, type não é objeto, é tipo

const f1: Funcionario = {
    superVisores: ['José', 'Roberto'],
    baterPonto: (h: number): string => {
        if(h >= 10) {
            return 'horário muito alto'
        }

        return 'horário muito baixo'
    }
}

console.log(f1)
console.log(f1.baterPonto(11));
console.log(f1.baterPonto(5));





//union type
let nota: string | number;
nota = 20;
console.log(nota); 
nota = '20'
console.log(nota);
