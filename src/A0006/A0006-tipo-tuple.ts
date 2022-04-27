// Type tuple
const dadosCliente1: readonly [number, string] = [1, 'Tawan']; // tupla imutável
const dadosCliente2: [number, string, string] = [1, 'Souza', 'Tawan'];
const dadosCliente3: [number, string, string?] = [1, 'Silva'];
const dadosCliente4: [number, string, ...string[]] = [1, 'Tawan', 'Silva'];

// dadosCliente1[0] = 100;
// dadosCliente1[1] = 'Cátia';
// dadosCliente1.pop();

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

// rendonly array
const array1: readonly string[] = ['Tawan Silva'];
const array2: readonly Array<string> = ['Tawan Silva'];

console.log(array1);
console.log(array2);
