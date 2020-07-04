// let & const

//exemplo 1
var seraQuePode;
console.log(seraQuePode);
seraQuePode = '?';


//exemplo 2
let estaFrio = true
if (estaFrio) {
    let acao = 'Colocar o casaco!';
}
// console.log(acao); //compila


// Arrow Function
const somar = function (n1: number, n2: number): number {
    return n1 + n2;
}
console.log(somar(2, 2))

const subtrair = (n1: number, n2: number): number => n1 - n2;
console.log(subtrair(4, 1));


const saudacao = () => console.log('Olá');
saudacao();

const falarCom = (pessoa: string) => console.log('Olá ' + pessoa);
falarCom('João')


//this, funcao sem arrow
// function normalComThis() {
//     console.log(this);
// }

/*  o this na função normalComThis tera o valor do objeto, 
    e retorna para a variavel normalComThisEspecial
    aqui o this varia
*/
// const normalComThisEspecial = normalComThis.bind({ nome: 'gabriel' });
// normalComThisEspecial();


// this, funcao com arrow

/* na função arrowComThis, o this é sempre o mesmo.
    aqui o this é sempre o mesmo do contexto no qual foi escrito.
*/
// const arrowComThis = () => console.log(this);
// arrowComThis();



// parâmetro padrão
function contagemRegressiva(inicio: number = 3, fim: number = inicio + 2) {
    console.log('início', inicio);
    console.log('fim', fim)
}

contagemRegressiva(3, 5);
contagemRegressiva();


// Rest & Spread
const numbers = [1, 10, 99, -5]
console.log(Math.max(...numbers)) // ...numbers = 1,10,99,-5


const turmaA = ['Gabriel', 'João', 'Maria']

// ['Gabriel', 'João', 'Maria','Geovana', 'Larissa', 'Ana']
const turmaB = ['Geovana', 'Larissa', 'Ana', ...turmaA];
console.log(turmaB);

// ['Gabriel', 'João', 'Maria','Geovana', 'Larissa', 'Ana', 'Gabriel', 'João']
const turmaC = [...turmaA, ...turmaB]
console.log(turmaC)


// quantidade de parametros fixos
function retornarArrayFixo(arg1: number, arg2: number): number[] {
    return [arg1, arg2];
}
const numerosFixos = retornarArrayFixo(1, 2);
console.log(numerosFixos);

// quantide de parametros dinâmicos
function retornarArrayDinamico(...args: number[]): number[] {
    return args;
}
const numerosDinamicos = retornarArrayDinamico(1, 2, 3, 4, 5, 6, 7, 10, 20, 30);
console.log(numerosDinamicos);


// parametros tupla Rest & Spread

function tuplaParam(...args: [string, boolean, number]): string {
    return `string => ${args[0]} boolean => ${args[1]} number => ${args[2]}`;
}

const stringTupled = tuplaParam('gabriel', true, 27);
console.log(stringTupled)


// destructuring (array)
const caracteristicas = ['Motor Zetec 1.8', 2020]

const [motor, ano] = caracteristicas;

console.log(motor, ano);


// destructuring (objeto)
const item = {
    nome: 'SSD 480GB',
    preco: 200,
    caracteristicas: {
        importado: true
    }
}

const { nome: Sou_Um_Alias, caracteristicas: { importado } } = item;
const { preco } = item;

console.log(Sou_Um_Alias); // 'SSD 480GB'
console.log(importado); // 'true'


// template string
const primeiroNome = 'gabriel';
const segundoNome = "navas";
const nomeCompleto = `
    ${primeiroNome} ${segundoNome}
    ${primeiroNome.length + segundoNome.length > 0 ?
        'nome grandao!!' :
        'nome não definido'
    }
`;
console.log(nomeCompleto);

const modoRuimDeLer = primeiroNome + ' ' + segundoNome;




// Exercicio 1
const dobro = (valor: number) => {
    return valor * 2;
}
console.log(dobro(10));

// Exercicio 2
const dizerOla = (nome: string = 'pessoa') => {
    console.log(`Ola, ${nome}`);
}

dizerOla();
dizerOla("Anna");

// Exercicio 3 menor valor
const nums: number[] = [-3, 33, 38, 5];
console.log(Math.min(...nums));

// Exercicio 4
const array: number[] = [55, 20];
nums.forEach(n => array.push(n));
//ou
nums.push(...nums);

console.log(array);

// Exercicio 5
const notas: number[] = [8.5, 6.3, 9.4];
const [nota1, nota2, nota3] = notas;
console.log(nota1, nota2, nota3);

// Exercicio 6

type Pessoa2 = {
    primeiroNome2: string,
    experiencia: number
}

const cientista: Pessoa2 = { primeiroNome2: "Will", experiencia: 12 }
const { primeiroNome2, experiencia } = cientista;
console.log(primeiroNome, experiencia)



// Callback

function esperar3s(callback: (mensagem: string) => void) {
    setTimeout(() => {
        callback('3s depois')
    }, 3000);
}

esperar3s((mensagem: string) => console.log(mensagem))
console.log('antes da callback')

// Promise

function esperar3sPromise() {
    return new Promise((resolve: any, reject: any) => {
        setTimeout(() => {
            resolve('4s depois promise')
        }, 4000);
    })
}

esperar3sPromise()
    .then(r => {
        console.log(r)
    })
console.log('antes da promise')


// várias chamas then (encadeamento)

fetch('https://swapi.co/api/people/1/')
    .then(res => res.json())
    .then(personagem => {
        console.log(personagem)
    })
    // .then(films => console.log(films))
    // .then(films => fetch(films[0]))
    // .then(filme => filme.json())
    // .then(filme => console.log(filme))
    .catch(err => console.log(err))