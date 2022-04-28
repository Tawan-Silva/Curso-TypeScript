// Sempre que formos receber alguma coisa de uma API ou etc..
// Ultilizar unknown em vez do any, mas precisa chegar o typeof

let x: unknown;

x = 100;
x = 'Tawan';
x = 900;
x = 10;

const y = 800;

if (typeof x === 'number') console.log(x + y);
