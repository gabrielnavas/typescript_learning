
//String

let nome:string = "João"
console.log(nome)
//nome = 28 => o tipo de nome é string



//number
let idade:number = 27;
//idade = 'ana' => o tipo de idade é number
idade = 27.5 //posso usar ponto flutuante


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
enum Cor{
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

carro = {marca: 'BMW', ano: 2015}
console.log(carro) // => {marca: BMW, ano: 2015}

