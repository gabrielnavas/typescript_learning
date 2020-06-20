"use strict";
//String
let nome = "João";
console.log(nome);
//nome = 28 => o tipo de nome é string
//number
let idade = 27;
//idade = 'ana' => o tipo de idade é number
idade = 27.5; //posso usar ponto flutuante
let decimal = 6;
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
// boolean
let possuiHobbies = false;
// possuiHobbies = 1; // possuiHobbies é boolean, number não pode ser atribuido
// tipos explícitos
let minhaIdade;
console.log(typeof minhaIdade); // => any
minhaIdade = 27; //tipo dinâmico
console.log(typeof minhaIdade); // => number
minhaIdade = 'gabriel';
console.log(typeof minhaIdade); // => string
// array
let hobbies = ["Cozinhar", 1, true];
console.log(typeof hobbies[0]); // => string
console.log(typeof hobbies[1]); // => number 
console.log(typeof hobbies[2]); // => boolean
let hobbiesTipados = ["Cozinhar", "praticar esportes"];
//hobbiesTipados.push(2); => error type
console.log(typeof hobbiesTipados[0]); // => string
console.log(typeof hobbiesTipados[1]); // => string 
// tuplas => array com tipos previamente definidos
//nesse caso, digo explicitamente que na variavel endereco eu quero uma string e um number
let endereco = ["Av Principa", 99];
console.log(typeof endereco[0]); // => string
console.log(typeof endereco[1]); // => number
// console.log(typeof endereco[2]) // => error, o tamanho definido do array é 2, pois so tem [string e number]
//enum
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 101] = "Azul";
    Cor[Cor["Marron"] = 3] = "Marron";
    Cor[Cor["Rosa"] = 500] = "Rosa";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor); // => 100
console.log(Cor.Azul); // => 101
console.log(Cor.Marron); // => 3
console.log(Cor.Rosa); // => 500
// any
let carro = 'BMW';
console.log(carro); // => BMW
carro = { marca: 'BMW', ano: 2015 };
console.log(carro); // => {marca: BMW, ano: 2015}
// funções
function retornaNome() {
    // return idade; // error type, a função espera retornar uma tipo string
    return nome;
}
console.log(retornaNome()); // => João
function imprimeOlaMundo() {
    console.log('Olá mundo');
    // return 'olá mundo' // erro, void não retorna nada
}
imprimeOlaMundo();
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(2.11111111111111111111111111111111, 2));
console.log(multiplicar(2.0, 2));
//funcao como tipo
//declaração
function souUmaFuncao(x, y) {
    return x + y;
}
//soma rece uma funcao que tem 2 param number e retorna um number
let soma;
soma = souUmaFuncao;
let soma2;
soma2 = souUmaFuncao;
// objetos
let usuario = {
    nome: 'João',
    idade: 26,
};
// usuario = {} tem que ser um objeto com os mesmo atributos e nome
// usuario = {
//     name: 'Maria',
//     age: 31,
// }
//atribuição explícita
let userTipado = {
    nome: 'João',
    idade: 24,
};
//agora eu posso mudar tranquilamente, desde que as chaves sejam as mesma.
userTipado = {
    nome: 'Gabriel',
    idade: 21,
};
//Desafio
/*
    Criar um objeto funcionário com:
        -- Array de strings com os nomes dos supervisores
        -- Função de bater ponto que recebe a hora e retorna uma string
            -> Ponto normal (<= 8)
            -> Fora do horário (> 8)

*/
let funcionario = {
    superVisores: ['Ana', 'Fernando'],
    baterPonto(horario) {
        if (horario <= 8) {
            return 'Ponto normal';
        }
        return 'Fora do horário';
    }
};
console.log(funcionario);
console.log(funcionario.baterPonto(3));
console.log(funcionario.baterPonto(9));
// console.log(Funcionario); // Não é possível, type não é objeto, é tipo
const f1 = {
    superVisores: ['José', 'Roberto'],
    baterPonto: (h) => {
        if (h >= 10) {
            return 'horário muito alto';
        }
        return 'horário muito baixo';
    }
};
console.log(f1);
console.log(f1.baterPonto(11));
console.log(f1.baterPonto(5));
//union type
let nota;
nota = 20;
console.log(nota);
nota = '20';
console.log(nota);
//checando tipos manualmente
let estoque = 22;
if (typeof estoque === 'number') {
    console.log('é number');
}
//never
function falha(error) {
    throw new Error(error);
}
function loopInfinito(error) {
    while (true) { }
}
const produto = {
    nome: 'maça',
    preco: 4,
    validar: function (nome) {
        if (nome.trim().length === 0) {
            falha('nome vazio');
        }
        if (this.preco <= 0) {
            falha('Preço inválido');
        }
    }
};
produto.validar('');
//tipo null
let altura = 12;
/* se setar o strictNullChecks = false,
poderia utilizar null em tipos nao null */
// altura = null; // => não aceita
let alturaOpcional = 12;
alturaOpcional = null;
const contato1 = {
    nome: 'Fulano',
    tel1: '213242152',
    tel2: null,
};
let ApenasNulo = null; //apenas nulo (não faz sentido)
let poderSerNulo = null; //atribuido tipo any
poderSerNulo = 12; // type number
poderSerNulo = 'abc'; // type string
//# sourceMappingURL=tipos.js.map