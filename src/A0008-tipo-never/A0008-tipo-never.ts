// never nunca vai retornar nada
// Ou vai elatrava a aplicação em caso de loop infinito
// lança o erro
function criaErro(): never {
  throw new Error('Erro qualquer');
}

criaErro();
