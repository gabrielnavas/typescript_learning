/**
 * 
 * 
 * transformar esse codigo em TS
 
     let contaBancaria = {
        saldo: 3456,
        depositar(valor) {
            this.saldo += valor
        }
    }
     
    let correntista = {
        nome: 'Ana Silva',
        contaBancaria: contaBancaria,
        contatos: ['34567890', '98765432']
    }
     
    correntista.contaBancaria.depositar(3000)
    console.log(correntista)
 
 */

type Conta = {
    saldo: number,
    depositar(valor: number): void,
}


let contaBancaria: Conta = {
    saldo: 3456,
    depositar(valor: number) {
        this.saldo += valor
    }
}

type Pessoa = {
    nome: string,
    contaBancaria: Conta,
    contatos: string[],    
}
 
let correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
}
 
correntista.contaBancaria.depositar(3000)
console.log(correntista)
