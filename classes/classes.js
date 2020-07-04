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
//# sourceMappingURL=classes.js.map