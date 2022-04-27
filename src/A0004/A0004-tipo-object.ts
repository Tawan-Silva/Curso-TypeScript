const objetoA: {
  readonly chaveA: string; // readonly -> não permite o valor da chave ser alterada
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

// objetoA.chaveA = 'Outro valor';
console.log(objetoA);

objetoA.chaveC = 'Nova chave';
objetoA.chaveD = 'Nova chave';
