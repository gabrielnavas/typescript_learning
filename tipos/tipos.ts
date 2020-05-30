
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
