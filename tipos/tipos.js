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
