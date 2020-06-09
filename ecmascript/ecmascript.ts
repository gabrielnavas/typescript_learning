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



