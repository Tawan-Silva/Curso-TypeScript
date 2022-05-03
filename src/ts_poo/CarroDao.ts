import { DaoInterface } from "./DaoInterface";
import Carro from "./Carro";

export class CarroDao implements DaoInterface {

    nomeTabela: string = 'tb_veiculo';

  inserir(object: Carro): boolean {
      console.log('lógica de insert');
      return true;
  }

  atualizar(object: Carro): boolean {
    console.log('Lógica update');
    return true;
  }

  remover(id: number): Carro {
    console.log('Lógica delete');
    return new Carro('HR-V 2022', 4);
  }

  selecionar(id: number): Carro {
    console.log('Lógica select');
    return new Carro('HR-V 2022', 4);
  }

  selecionarTodos(): [any] {
    console.log('lógica getAll');
    return [new Carro('HR-V 2022', 4)];
  }

}
