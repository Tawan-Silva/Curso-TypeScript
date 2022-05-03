/*eslint-disable */

let x = 10;
x = 0b1010;
const y = 10;
let a = 100 as const;

const pessoa = {
    nome: 'Tawan' as const, // asserção
    sobrenome: 'Silva',
};
//                         isso aqui é tipo! não valor!
function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
    return cor;
}

console.log(escolhaCor);


// Module mode
export default 1;
