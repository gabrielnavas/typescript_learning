// let & const

//exemplo 1
var seraQuePode;
console.log(seraQuePode);
seraQuePode = '?';


//exemplo 2
let estaFrio = true
if(estaFrio) {
    let acao = 'Colocar o casaco!';
}
// console.log(acao); //compila


// Arrow Function
const somar = function(n1: number,n2: number): number {
    return n1+n2;
}
console.log(somar(2,2))

const subtrair = (n1: number, n2:number): number => n1 - n2;
console.log(subtrair(4,1));


const saudacao = () => console.log('Olá');
saudacao();

const falarCom = (pessoa: string) => console.log('Olá ' + pessoa);
falarCom('João')


//this, funcao sem arrow
function normalComThis(){
    console.log(this);
}

/*  o this na função normalComThis tera o valor do objeto, 
    e retorna para a variavel normalComThisEspecial
    aqui o this varia
*/
const normalComThisEspecial = normalComThis.bind({nome: 'gabriel'});
normalComThisEspecial();


// this, funcao com arrow

/* na função arrowComThis, o this é sempre o mesmo.
    aqui o this é sempre o mesmo do contexto no qual foi escrito.
*/
const arrowComThis = () => console.log(this);
arrowComThis();