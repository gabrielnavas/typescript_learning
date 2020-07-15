import Livro from './modelo/livro'


const livro = new Livro('Dom Quixote', 108.80, 0.10);
console.log(livro.precoComDesconto());