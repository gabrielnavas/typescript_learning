"use strict";
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    toString() {
        const dia = this.dia >= 10 ? this.dia : `0${this.dia}`;
        const mes = this.mes >= 10 ? this.mes : `0${this.mes}`;
        return `${dia}-${mes}-${this.ano}`;
    }
}
const data = new Data(2, 3, 1995);
console.log(data.toString());
const data2 = new Data;
console.log(data2.toString());
console.log(data2);
class DataEsperta {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    toString() {
        const dia = this.dia >= 10 ? this.dia : `0${this.dia}`;
        const mes = this.mes >= 10 ? this.mes : `0${this.mes}`;
        return `${dia}-${mes}-${this.ano}`;
    }
}
const dataEsp = new DataEsperta(2, 3, 1995);
console.log(dataEsp.toString());
const dataEsp2 = new DataEsperta;
console.log(dataEsp2.toString());
console.log(dataEsp2);
//desafio do leo
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    valorComDesconto() {
        return this.calcularDesconto();
    }
    fraseDePreco() {
        const preco = this.calcularDesconto();
        const desconto = this.desconto * 100;
        return `Preço de R$${preco} com ${desconto}% de desconto.`;
    }
    calcularDesconto() {
        return this.preco - this.preco * this.desconto;
    }
}
const p1 = new Produto('Gol 6 geração', 100000.454444);
const p2 = new Produto('Gol 6 geração', 100000.2232366, 0.20);
console.log(p1.valorComDesconto());
console.log(p1.fraseDePreco());
console.log(p2.valorComDesconto());
console.log(p2.fraseDePreco());
// modificadores de acesso 
class Carro {
    constructor(marca, modelo, velocidadeAtual = 0, velocidadeMaxima = 100) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeAtual = velocidadeAtual;
        this.velocidadeMaxima = velocidadeMaxima;
    }
    setarVelocidade(velocidade) {
        const novaVelocidade = this.velocidadeAtual + velocidade;
        if (novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima) {
            this.velocidadeAtual = novaVelocidade;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        const velocidadeAntiga = this.velocidadeAtual;
        const acelerou = this.setarVelocidade(5) > velocidadeAntiga;
        return acelerou;
    }
    frear() {
        const velocidadeAntiga = this.velocidadeAtual;
        const freou = this.setarVelocidade(-5) < velocidadeAntiga;
        return freou;
    }
}
const car1 = new Carro('Ferrari', 'B500', 0, 200);
for (let i = 0; i < 40; i++) {
    console.log('Acelerou', car1.acelerar());
}
console.log('Acabou', car1.acelerar());
console.log('Freiouuu', car1.frear());
// herança
class Ferrari extends Carro {
    constructor(modelo, velocidademaxima) {
        super('Ferrari', modelo, 0, velocidademaxima);
    }
    acelerar() {
        const velocidadeAntiga = this.velocidadeAtual;
        const freou = this.setarVelocidade(10) < velocidadeAntiga;
        return freou;
    }
    frear() {
        const velocidadeAntiga = this.velocidadeAtual;
        const freou = this.setarVelocidade(-10) < velocidadeAntiga;
        return freou;
    }
}
const f40 = new Ferrari('F40', 324);
console.log(f40.acelerar());
console.log(f40.frear());
// Getters & Setters
class Pessoa3 {
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(idade) {
        if (idade >= 0 && idade <= 120) {
            this._idade = idade;
        }
    }
}
const p3 = new Pessoa3();
p3.idade = 4;
console.log(p3.idade);
p3.idade = -10;
console.log(p3.idade);
// membros estáticos
class Matematica {
    static areaCirc(raio) {
        return this.PI * raio * raio;
    }
}
Matematica.PI = 3.1415;
console.log(Matematica.areaCirc(5));
// classe abstrata
class Empresa {
    constructor(_CNPJ) {
        this._CNPJ = _CNPJ;
    }
}
class NavasLTDA extends Empresa {
    constructor(_CNPJ) {
        super(_CNPJ);
        this._CNPJ = _CNPJ;
    }
    verificarCNPJ() {
        return this._CNPJ.length > 0;
    }
    get CNPJ() {
        return this._CNPJ;
    }
    set CNPJ(CNPJ) {
        this._CNPJ = CNPJ;
    }
}
class Calculo {
    constructor() {
        this.resultado = 0;
    }
    getResultado() {
        return this.resultado;
    }
}
class Soma extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, v) => t + v);
    }
}
class Multiplicacao extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, v) => t * v);
    }
}
const s = new Soma();
s.executar(1, 2, 3);
console.log(s.getResultado());
const m = new Multiplicacao();
m.executar(1, 2, 3);
console.log(m.getResultado());
// polimorfismo
const calc = new Soma();
const calc2 = new Multiplicacao();
// contrutor privado e singleton
class Unico {
    constructor() { }
    static getInstance() {
        return Unico._instance || (this._instance = new Unico());
    }
    agora() {
        return new Date();
    }
}
// const errado = new Unico()
console.log(Unico.getInstance());
console.log(Unico.getInstance().agora());
// Somente Leitura
class Aviao {
    constructor(modelo, prefixo) {
        this.prefixo = prefixo;
        this.modelo = modelo;
    }
}
const turboHelice = new Aviao('Tu-114', 'PT-ABC');
// turboHelice.modelo = 'Outro Modelo'; //nao da pra alterar.
// turboHelice.prefixo = 'Outro Prefixo';
console.log(turboHelice);
//# sourceMappingURL=classes.js.map