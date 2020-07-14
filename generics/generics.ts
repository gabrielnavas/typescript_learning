function echo(objeto: any) {
    return objeto;
}
console.log(echo('João').length);
console.log(echo(27).length);
console.log(echo({nome: 'João', idade: 27}));