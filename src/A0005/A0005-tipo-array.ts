/* eslint-disable */
// Array<T> - T[]
export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((acc, valor) => acc * valor, 1);
}

export function concatString(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}
export function toUpperCase(...args: string[]) {
  return args.map((valor) => valor.toUpperCase());
}

const result = multiplicaArgs(1, 2, 3);
const concat = concatString('a', 'b', 'c');
const upper = toUpperCase('a', 'b', 'c');

console.log(result);
console.log(concat);
console.log(upper);
