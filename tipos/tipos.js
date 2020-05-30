"use strict";
//String
var nome = "João";
console.log(nome);
//nome = 28 => o tipo de nome é string
//number
var idade = 27;
//idade = 'ana' => o tipo de idade é number
idade = 27.5; //posso usar ponto flutuante
// boolean
var possuiHobbies = false;
// possuiHobbies = 1; // possuiHobbies é boolean, number não pode ser atribuido
// tipos explícitos
var minhaIdade;
console.log(typeof minhaIdade); // => any
minhaIdade = 27; //tipo dinâmico
console.log(typeof minhaIdade); // => number
minhaIdade = 'gabriel';
console.log(typeof minhaIdade); // => string
// array
var hobbies = ["Cozinhar", 1, true];
console.log(typeof hobbies[0]); // => string
console.log(typeof hobbies[1]); // => number 
console.log(typeof hobbies[2]); // => boolean
var hobbiesTipados = ["Cozinhar", "praticar esportes"];
//hobbiesTipados.push(2); => error type
console.log(typeof hobbiesTipados[0]); // => string
console.log(typeof hobbiesTipados[1]); // => string 
// tuplas => array com tipos previamente definidos
//nesse caso, digo explicitamente que na variavel endereco eu quero uma string e um number
var endereco = ["Av Principa", 99];
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
var minhaCor = Cor.Verde;
console.log(minhaCor); // => 100
console.log(Cor.Azul); // => 101
console.log(Cor.Marron); // => 3
console.log(Cor.Rosa); // => 500
// any
var carro = 'BMW';
console.log(carro); // => BMW
carro = { marca: 'BMW', ano: 2015 };
console.log(carro); // => {marca: BMW, ano: 2015}
