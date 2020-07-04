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






