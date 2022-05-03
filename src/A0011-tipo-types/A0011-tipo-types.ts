// |

function addOrConcat(
  a: number | string | boolean,
  b: number | string | boolean,
): number | string {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  //   if (typeof a === 'string' && typeof b === 'string') return a + b;
  return `${a}${b}`;
}

console.log(addOrConcat(50, 100));
console.log(addOrConcat('20', '100'));
console.log(addOrConcat(40, 10));
console.log(addOrConcat('80', 100));
