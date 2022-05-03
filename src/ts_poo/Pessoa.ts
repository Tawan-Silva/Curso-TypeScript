import Carro from './Carro';

export default class Pessoa {
    public nome: string;
    public caroPreferido: string;
    public carro: Carro;
  
    constructor(nome: string, carroPreferido: string) {
      this.nome = nome;
      this.caroPreferido = carroPreferido;
    }
  
    dizerNome(): string {
      return this.nome;
    }
  
    dizerCarroPreferido(): string {
      return this.caroPreferido;
    }
  
    comprarCarro(carro: Carro): any {
      this.carro = carro;
    }
  
    dizerCarroQueTem(): Carro {
      return this.carro;
    }
  }