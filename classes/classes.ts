class Data {
    private dia: number;
    public mes: number;
    private ano: number;

    constructor(dia:number=1, mes:number=1, ano:number=1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }

    toString(): string {
        const dia = this.dia >= 10 ? this.dia : `0${this.dia}`
        const mes = this.mes >= 10 ? this.mes : `0${this.mes}`
        
        return `${dia}-${mes}-${this.ano}`;    
    }
}

const data = new Data(2,3,1995);
console.log(data.toString())


const data2 = new Data;
console.log(data2.toString())
console.log(data2)




class DataEsperta {

    constructor(
        private dia:number=1, 
        public mes:number=1, 
        public ano:number=1970) {}

    toString(): string {
        const dia = this.dia >= 10 ? this.dia : `0${this.dia}`
        const mes = this.mes >= 10 ? this.mes : `0${this.mes}`
        
        return `${dia}-${mes}-${this.ano}`;    
    }
}

const dataEsp = new DataEsperta(2,3,1995);
console.log(dataEsp.toString())


const dataEsp2 = new DataEsperta;
console.log(dataEsp2.toString())
console.log(dataEsp2)




//desafio do leo

class Produto {

    constructor(
        private nome: string,
        private preco: number,
        private desconto: number = 0,
    ) {}

    valorComDesconto(): number {
        return this.calcularDesconto();
    }

    fraseDePreco(): string {
        const preco = this.calcularDesconto()
        const desconto = this.desconto*100;

        return `Preço de R$${preco} com ${desconto}% de desconto.`
    }

    private calcularDesconto(): number {
        return this.preco - this.preco * this.desconto;
    }

    
}
const p1= new Produto('Gol 6 geração', 100000.454444)
const p2 = new Produto('Gol 6 geração', 100000.2232366, 0.20)

console.log(p1.valorComDesconto())
console.log(p1.fraseDePreco())
console.log(p2.valorComDesconto())
console.log(p2.fraseDePreco())






// modificadores de acesso 

class Carro {
    constructor(
        private marca: string, 
        private modelo: string, 
        protected velocidadeAtual: number = 0,
        protected velocidadeMaxima: number = 100
    ) {}

    
    protected setarVelocidade(velocidade: number): number {
        const novaVelocidade = this.velocidadeAtual + velocidade;

        if(novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima) {
            this.velocidadeAtual = novaVelocidade;
        }

        return this.velocidadeAtual ;
    }

    public acelerar(): boolean {
        const velocidadeAntiga = this.velocidadeAtual;
        const acelerou = this.setarVelocidade(5) > velocidadeAntiga;

        return acelerou;
    }

    public frear(): boolean {
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

const f40 = new Ferrari('Ferrari', 'F40', 0, 324);
console.log(f40.acelerar())
console.log(f40.frear())