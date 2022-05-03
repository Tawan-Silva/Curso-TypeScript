/* eslint-disable */
//                   rest
function semRetorno(...args:  string[]): void {
    console.log(args.join(' '));
}

const pessoa = {
    nome: 'Tawan',
    sobrenome: 'Silva',

    exibirNome(): void {
        console.log(this.nome + ' ' + this.sobrenome);

    }
}

semRetorno('Tawan', 'Silva');
pessoa.exibirNome();

export { pessoa };
