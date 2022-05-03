import { DaoInterface } from "./DaoInterface";
import Moto from "./Moto";

export class MotoDao implements DaoInterface {

    nomeTabela: string = 'tb_veiculo';

  inserir(object: Moto): boolean {
      console.log('lógica de insert');
      return true;
  }

  atualizar(object: Moto): boolean {
    console.log('Lógica update');
    return true;
  }

  remover(id: number): Moto {
    console.log('Lógica delete');
    return new Moto();
  }

  selecionar(id: number): Moto {
    console.log('Lógica select');
    return new Moto();
  }

  selecionarTodos(): [any] {
    console.log('lógica getAll');
    return [new Moto()];
  }

}
