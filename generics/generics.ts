function echo(objeto: any) {
    return objeto;
}
// console.log(echo('João').length);
// console.log(echo(27).length);
// console.log(echo({nome: 'João', idade: 27}));


// Usando Generics
function echoMelhorado<T>(objeto: T): T {
    return objeto;
}

function echoMelhorado2<TIPO>(objeto: TIPO): TIPO {
    return objeto;
}


console.log(echoMelhorado<string>('João').length);
console.log(echoMelhorado2(27).toString());
console.log(echoMelhorado<{nome: string, idade: number}>({nome: 'João', idade: 27}).nome);

// Generics disponíveis na API
const avaliacoes: Array<number> = [10, 9.3, 7.7];
// avaliacoes.push('43');
avaliacoes.push(43);
console.log(avaliacoes);