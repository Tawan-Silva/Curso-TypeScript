/* Recomendado */

// Ultilizar condicional caso não tenha certeza se está presente
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

// HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Valor do input';
input.focus();

// Type assertion
// Ultizar type assertion quando tiver certeza que o element existe
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

/* Não Recomendado*/
// Type assertion
const body4 = document.querySelector('body') as unknown as number;

// Non-null assertion (!)
const body2 = document.querySelector('body')!;
body2.style.background = 'red';
