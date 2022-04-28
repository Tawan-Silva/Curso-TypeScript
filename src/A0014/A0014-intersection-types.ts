// |
// & interseção

type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade; // AND

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'C';
type Intersecao = AB & AC & AD;

const pessoa: Pessoa = {
  nome: 'Tawan',
  sobrenome: 'Silva',
  idade: 20,
};

console.log(pessoa);

// Module mode
export { pessoa };
